import axios from 'axios';

const api = axios.create({
    baseURL: 'https://que-vinho-gustavos-projects-16afdf91.vercel.app'
})

export default api;