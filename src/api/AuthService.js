import Http from '../services/HttpService';
import LocalStorageService from '../services/LocalStorageService';

class AuthService {
  constructor() {
      this.user = null;
  }

  isLoggedIn() {
    return this.user !== null;
  }

  currentUser() {
    return this.user;
  }

  logout() {
    this.user = null;
    Http.destroyAuthToken();
    LocalStorageService.clear();

    return Promise.resolve();
  }

  handleAuthFlow = (user) => {
    this.user = user;

    Http.setAuthToken(user.token);
    LocalStorageService.storeToken(user.token);

    Promise.resolve();
  }

  loginWithCredentials(email, password) {
    return Http.post('http://localhost:5000/api/users/login', { email, password })
    .then(this.handleAuthFlow)
    .catch(error => console.error('AuthService -> loginWithCredentials:', error));
  }

  register(data) {
    return Http.post('http://localhost:5000/api/users/new', data)
    .then(this.handleAuthFlow)
    .catch(error => console.error('AuthService -> register:', error));
  }

  getCurrent() {
    return Http.get('http://localhost:5000/api/users/current')
    .then(res => {
      this.user = res;
    })
    .catch(error => console.error('AuthService -> getCurrent:', error));
  }

  getAll() {
    return Http.get('http://localhost:5000/api/users/all')
    .then(res => res)
    .catch(error => console.error('AuthService -> getAll:', error));
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
