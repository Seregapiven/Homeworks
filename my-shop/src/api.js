import axios from 'axios';

const API_URL = 'https://rest-mock-server.herokuapp.com/';

export const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    if (window.token) {
        config.headers.Authorization = 'Bearer ' + window.token;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status >= 500) {
            alert('Something went wrong!! Please retry later!!');
        }

        return Promise.reject(error);
    }
);

export default api;