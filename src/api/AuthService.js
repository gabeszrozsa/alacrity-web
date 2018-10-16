import Http from '../services/HttpService';

class AuthService {
  constructor() {
      this.user = null;
  }

  isLoggedIn() {
    console.log('isLoggedIn', this.user !== null);
    return this.user !== null;
  }

  loginWithCredentials(email, password) {
    return Http.post('http://localhost:3000/api/users/login', {
      email: email,
      password: password
    })
    .then(user => {
      this.user = user;

      const tokenLength = user.tokens.length;
      const lastToken = user.tokens[tokenLength - 1];
      Http.setAuthToken(lastToken.token);

      Promise.resolve();
    })
    .catch(error => console.error('AuthService -> loginWithCredentials:', error));
  }

  getCurrent() {
    return Http.get('http://localhost:3000/api/users/current')
    .then(res => {
      console.log('getcurrent', res);
    })
    .catch(error => console.error('AuthService -> loginWithCredentials:', error));
  }

}

const instance = new AuthService();
export default instance;
