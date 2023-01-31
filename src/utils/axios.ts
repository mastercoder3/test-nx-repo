import axios from 'axios';

// Please use env for changing App Base URL
const api = axios.create({
    baseURL: 'http://localhost:3000',
});

// interceptor for http
api.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject((error?.response && error?.response.data) || error),
);

export default api;