import axios from 'axios';

const api = axios.create({
  baseURL: 'http://164.41.76.30/dodfminner/api',
});

export default api;