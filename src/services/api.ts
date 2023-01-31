import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  // baseURL: 'http://knedash.unb.br/dodfminner/api',
});


export default api;