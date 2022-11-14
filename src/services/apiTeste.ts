import axios from 'axios';

const apiTeste = axios.create({
  baseURL: 'http://164.41.76.30/dodfminner_test/api'
})

export default apiTeste;