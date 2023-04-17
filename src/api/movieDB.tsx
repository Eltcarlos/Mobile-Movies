import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'acf0ab72058cbd46eaa7efd8bafb4a93',
    language: 'es-ES',
  },
});

export default movieDB;
