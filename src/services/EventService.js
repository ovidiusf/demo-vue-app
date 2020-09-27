import axios from 'axios';
import NProgress from 'nprogress';

let IP = 'http://192.168.6.130';

if (process.env.NODE_ENV !== 'production') {
  IP = 'http://192.168.6.130:3000';
} else {
  IP = 'https://json-server-dummy.herokuapp.com';
}

const apiClient = axios.create({
  baseURL: IP,
  // baseURL: 'https://json-server-dummy.herokuapp.com',
  withCredentials: false,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
  postEvent(event) {
    return apiClient.post('/events', event);
  }
};
