const wooConfig = require('./woo-config');
const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi(wooConfig);

const configureRoutes = (server) => {
  // get products
  server.get('/getProducts', (req, response) => {
    WooCommerce.get('products')
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Create an order
  server.post('/orders', (req, response) => {
    console.log(req, 'request');
    const data = {
      line_items: [
        {
          product_id: 49,
          quantity: 2,
        },
        {
          product_id: 51,
          quantity: 1,
        },
      ],
    };

    WooCommerce.post('orders', data)
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = {
  configureRoutes,
};
