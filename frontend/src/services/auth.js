import api from './api';

export const loginApi = (data) => api.post('/login', data);
export const registerApi = (data) => api.post('/register', data);
export const logoutApi = () => api.post('/logout');
export const meApi = () => api.get('/me');