import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3cdb0ef3ab853eaa9c37879f6c6dc610',
    language: 'en-US',
  },
});

export default movieDB;
