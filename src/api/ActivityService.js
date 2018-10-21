import Http from '../services/HttpService';

const BASE_URL = 'http://localhost:3000/api/activity';

class ActivityService {
  addNewActivity(data) {
    return Http.post(BASE_URL, data)
    .then(res => res)
    .catch(error => console.error('ActivityService -> addNewActivity:', error));
  }

  getAllActivities() {
    return Http.get(BASE_URL)
    .then(res => res)
    .catch(error => console.error('ActivityService -> getAllActivities:', error));
  }

  getActivity(id) {
    return Http.get(`${BASE_URL}/${id}`)
    .then(res => res)
    .catch(error => console.error('ActivityService -> getAllActivity:', error));
  }

  deleteActivity(id) {
    return Http.delete(`${BASE_URL}/${id}`)
    .then(res => res)
    .catch(error => console.error('ActivityService -> deleteActivity:', error));
  }

  updateActivity(id, data) {
    return Http.patch(`${BASE_URL}/${id}`, data)
    .then(res => res)
    .catch(error => console.error('ActivityService -> updateActivity:', error));
  }
}

const instance = new ActivityService();
export default instance;
