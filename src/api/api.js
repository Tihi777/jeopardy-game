import http from './apiConfig';

const register = (email, name, password) =>
	http.post('/register', { email, name, password }).then(response => {
		localStorage.setItem('token', response.access_token);
	});

const login = (email, password) =>
	http.post('/login', { email, password }).then(response => {
		localStorage.setItem('token', response.access_token);
	});

const logout = () => localStorage.removeItem('token');

const api = {
	register,
	login,
	logout,
};

export default api;
