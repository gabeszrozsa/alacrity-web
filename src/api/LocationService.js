import Http from '../services/HttpService';

const BASE_URL = 'http://localhost:3000/api/location';

class LocationService {
  addNewLocation(data) {
    return Http.post(BASE_URL, {
      name: data.name,
      coordinates: data.coordinates,
    })
    .then(res => res)
    .catch(error => console.error('LocationService -> addNewLocation:', error));
  }

  getAllLocations() {
    return Http.get(BASE_URL)
    .then(res => res)
    .catch(error => console.error('LocationService -> getAllLocations:', error));
  }

  getLocation(id) {
    return Http.get(`${BASE_URL}/${id}`)
    .then(res => res)
    .catch(error => console.error('LocationService -> getAllLocation:', error));
  }

  deleteLocation(id) {
    return Http.delete(`${BASE_URL}/${id}`)
    .then(res => res)
    .catch(error => console.error('LocationService -> deleteLocation:', error));
  }
}

const instance = new LocationService();
export default instance;
