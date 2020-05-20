const wooConfig = require('./woo-config');
const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceRestApi(wooConfig);

const configureRoutes = (server) => {
  // Get Products
  server.get('/getProducts', (req, response) => {
    WooCommerce.get('products')
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Get Categories
  server.get('/getCategories', (req, response) => {
    WooCommerce.get('products/categories')
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  });

  // Create an order
  server.post('/orders', (req, response) => {
    const data = {
      payment_method: 'cod',
      payment_method_title: 'Cash on delivery',
      billing: {
        email: 'john.doe@example.com',
        phone: '(555) 666',
        first_name: 'Dim',
        last_name: 'Dom',
        address_1: 'Minsk, 25',
      },
      customer_note: 'testing note',
      order_comments: 'somo notes',
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
      shipping_lines: [
        // {
        //   method_id: 'flat_rate',
        //   method_title: 'Flat Rate',
        //   total: 18,
        // },
        // {
        //   method_id: 'free_shipping',
        //   method_title: 'Free shipping',
        // },
      ],
    };

    WooCommerce.post('orders', data)
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  });
};

module.exports = {
  configureRoutes,
};
