import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62438dff39aae3e3b744128d.mockapi.io/musicas'
});

export default api;