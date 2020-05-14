import axios from 'axios';

const api = axios.create({
    //url base da api caso esteja rodando o laravel localmente
    baseURL: 'http://localhost:8000',
});

export default api;