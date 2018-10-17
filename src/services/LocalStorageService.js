class LocalStorageService {
  storeToken(token) {
    localStorage.setItem('alacrity-token', token);
  }

  getToken() {
    return localStorage.getItem('alacrity-token');
  }
}

const instance = new LocalStorageService();
export default instance;
