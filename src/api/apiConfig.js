import axios from 'axios';

const standURL = 'http://ip:port/';
const apiPath = 'api';

const http = axios.create({
  baseURL: standURL + apiPath,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
  config => ({ ...config, headers: { Authorization: localStorage.getItem('token') } }),
  error => Promise.reject(error)
);

http.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status;
    if (status === 401) {
      localStorage.removeItem('token');
    }
    if (status === 403) {
      // eslint-disable-next-line no-console
      console.log('You shall not pass');
    }
    return Promise.reject(error);
  }
);

export default http;
