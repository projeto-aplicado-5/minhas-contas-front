import axios from 'axios';

const token = window.localStorage.getItem('jwt_token');

const api = axios.create({
    //url base da api caso esteja rodando o laravel localmente
    baseURL: 'http://localhost:8000',
    headers: { Authorization: token ? `Bearer ${token}` : '' }
});

export default api;