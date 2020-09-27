import axios from 'axios';
import NProgress from 'nprogress';

let baseIp;

if (process.env.NODE_ENV !== 'production') {
  baseIp = 'http://192.168.6.130:3000';
} else {
  baseIp = 'https://json-server-dummy.herokuapp.com';
}

const apiClient = axios.create({
  baseURL: baseIp,
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
