import Http from '../services/HttpService';
import LocalStorageService from '../services/LocalStorageService';

class AuthService {
  constructor() {
      this.user = null;
  }

  isLoggedIn() {
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
      LocalStorageService.storeToken(lastToken.token);

      Promise.resolve();
    })
    .catch(error => console.error('AuthService -> loginWithCredentials:', error));
  }

  getCurrent() {
    return Http.get('http://localhost:3000/api/users/current')
    .then(res => {
      this.user = res;
    })
    .catch(error => console.error('AuthService -> loginWithCredentials:', error));
  }

  preAuthenticate() {
    return new Promise((resolve) => {
      const token = LocalStorageService.getToken();
      if (!token) {
        resolve();
      } else {
        Http.setAuthToken(token);
        this.getCurrent()
          .then(() => resolve())
          .catch(() => resolve());
      }
    })
  }

}

const instance = new AuthService();
export default instance;
