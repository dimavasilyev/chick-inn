import axios from 'axios';

const host = 'http://localhost:3000';

export default {
  getCategories: () => axios.get(`${host}/getCategories`),
  getProducts: () => axios.get(`${host}/getProducts`),
  makeOrder: () => axios.post(`${host}/orders`),
};
