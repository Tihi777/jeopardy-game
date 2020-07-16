import axios from 'axios';

const standURL = '';
const apiPath = 'api';

const http = axios.create({
	baseURL: standURL + apiPath,
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
	config => config,
	error => Promise.reject(error)
);

http.interceptors.response.use(
	response => response,
	error => Promise.reject(error)
);

export default http;
