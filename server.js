const next = require('next');
const express = require('express');
const wooConfig = require('./woo-config');
const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi(wooConfig);

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/getProducts', (req, response) => {
      WooCommerce.get('products')
        .then((res) => {
          response.json(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Ready on ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
