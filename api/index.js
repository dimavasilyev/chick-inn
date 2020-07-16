import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

import wooConfig from '../woo-config';

const WooCommerce = new WooCommerceRestApi(wooConfig);

export default {
  getCategories: () => {
    return WooCommerce.get('products/categories')
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },
  getProducts: () => {
    return WooCommerce.get('products')
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },
  makeOrder: (formValues, cartItems, totalPrice) => {
    const {
      email,
      name,
      telefon,
      delivery_method,
      street,
      house,
      porch,
      floor,
      apartment,
      rest,
      payment_method,
      comment,
    } = formValues;

    const preparedCartItems = cartItems.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    const paymentTitle = payment_method === 'cod' ? 'Cash on delivery' : 'Card(terminal)';

    const deliveryMethod = () => {
      let methodString = '';

      if (delivery_method === 'delivery') {
        methodString = 'Доставка';
        if (totalPrice < 250) {
          methodString += ' (35 лей)';
        } else {
          methodString += ' (Бесплатная)';
        }
      } else {
        methodString = 'Самовывоз';
      }

      return methodString;
    };

    const restFrom = rest ? `Сдача с ${rest}` : '';
    const userComment = comment
      ? `, Комментарий:
    ${comment}`
      : '';

    const getAdress = () => {
      const scaraStr = porch ? `Подъезд: ${porch}` : '';
      const floorStr = floor ? `Этаж: ${floor}` : '';
      const apartmentStr = apartment ? `Кв: ${apartment}` : '';

      return `Улица: ${street}
      Дом: ${house}
      ${scaraStr}
      ${floorStr}
      ${apartmentStr}`;
    };

    const note = `
      ${restFrom}
      ${userComment}
    `;

    const data = {
      payment_method,
      payment_method_title: paymentTitle,
      billing: {
        email,
        phone: telefon,
        first_name: name,
        address_1: getAdress(),
      },
      customer_note: note,
      line_items: preparedCartItems,
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: deliveryMethod(),
        },
        // {
        //   method_id: 'free_shipping',
        //   method_title: 'Free shipping',
        // },
      ],
      // order_meta: {
      //   key: 'test valuee',
      // },
    };

    return WooCommerce.post('orders', data)
      .then((res) => {
        response.json(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  },
};

// export default {
//   getCategories: () => {
//     axios
//       .get(`${host}/getCategories`)
//       .then((res) => console.log(res))
//       .catch((e) => console.log(e));
//     return { data: [] };
//   },
//   // getCategories: () =>
//   //   axios
//   //     .get(`${host}/getCategories`)
//   //     .then((res) => ({}))
//   //     .catch((e) => console.log(e)),
//   getProducts: () => ({
//     data: [],
//   }),
//   makeOrder: (formValues, cartItems) => {
//     return Promise.resolve();
//   },
// };
