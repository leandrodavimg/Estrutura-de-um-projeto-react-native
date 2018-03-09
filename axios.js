import axios from 'axios';

const api = axios.create({
    baseURL: 'url base da api',
});

export default api;