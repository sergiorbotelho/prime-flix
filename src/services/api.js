//Base da URL: https://api.themoviedb.org/3/

//https://api.themoviedb.org/3/movie/now_playing?api_key=3d6f2e161b1a9a3465052ebe5c9b1823&language=pt-BR


import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;