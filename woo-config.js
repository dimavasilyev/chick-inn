const axios = require('axios');

axios.defaults.headers['Content-Type'] = 'application/json';

const config = {
  url: 'https://chicken.vladimir-rodin.com/',
  consumerKey: 'ck_ee621c5433ba7db88bf08862a33f7cf5ceb7a3ff',
  consumerSecret: 'cs_4cfd576be1cd7eacb1d48602ef14897eb67983fd',
  version: 'wc/v3',
  queryStringAuth: true,
  axiosConfig: {
    ...axios.defaults,
  },
};

module.exports = config;
