import axios from 'axios';

const api = axios.create({
  baseURL: 'http://knedash.unb.br/dodfminner/api',
});


export default api;