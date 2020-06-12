import axios from 'axios';

const host = 'http://localhost:3000';

// export default {
//   getCategories: () => axios.get(`${host}/getCategories`),
//   getProducts: () => axios.get(`${host}/getProducts`),
//   makeOrder: (formValues, cartItems, totalPrice) => {
//     const {
//       email,
//       name,
//       telefon,
//       delivery_method,
//       street,
//       house,
//       porch,
//       floor,
//       apartment,
//       rest,
//       payment_method,
//       comment,
//     } = formValues;

//     const preparedCartItems = cartItems.map((item) => ({
//       product_id: item.id,
//       quantity: item.quantity,
//     }));

//     const paymentTitle = payment_method === 'cod' ? 'Cash on delivery' : 'Card(terminal)';

//     const deliveryMethod = () => {
//       let methodString = '';

//       if (delivery_method === 'delivery') {
//         methodString = 'Доставка';
//         if (totalPrice < 250) {
//           methodString += ' (35 лей)';
//         } else {
//           methodString += ' (Бесплатная)';
//         }
//       } else {
//         methodString = 'Самовывоз';
//       }

//       return methodString;
//     };

//     const restFrom = rest ? `Сдача с ${rest}` : '';
//     const userComment = comment
//       ? `, Комментарий:
//     ${comment}`
//       : '';

//     const getAdress = () => {
//       const scaraStr = porch ? `Подъезд: ${porch}` : '';
//       const floorStr = floor ? `Этаж: ${floor}` : '';
//       const apartmentStr = apartment ? `Кв: ${apartment}` : '';

//       return `Улица: ${street}
//       Дом: ${house}
//       ${scaraStr}
//       ${floorStr}
//       ${apartmentStr}`;
//     };

//     const note = `
//       ${restFrom}
//       ${userComment}
//     `;

//     const data = {
//       payment_method,
//       payment_method_title: paymentTitle,
//       billing: {
//         email,
//         phone: telefon,
//         first_name: name,
//         address_1: getAdress(),
//       },
//       customer_note: note,
//       line_items: preparedCartItems,
//       shipping_lines: [
//         {
//           method_id: 'flat_rate',
//           method_title: deliveryMethod(),
//         },
//         // {
//         //   method_id: 'free_shipping',
//         //   method_title: 'Free shipping',
//         // },
//       ],
//       // order_meta: {
//       //   key: 'test valuee',
//       // },
//     };

//     return axios({
//       method: 'POST',
//       data,
//       url: `${host}/orders`,
//     });
//   },
// };

export default {
  getCategories: () => ({
    data: [],
  }),
  getProducts: () => ({
    data: [],
  }),
  makeOrder: (formValues, cartItems) => {
    return Promise.resolve();
  },
};
