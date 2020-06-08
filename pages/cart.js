import React from 'react';
import Layout from '../components/layout';

import CartProductsList from '../components/cart-products-list/cart-products-list';
import OrderForm from '../components/order-form';

const Cart = () => {
  return (
    <Layout>
      <div className="cart-container bg-black sm:mx-16 lg:mx-40 p-8">
        <CartProductsList />
        <OrderForm />
      </div>
      <style jsx>{`
        .cart-container {
          border-radius: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Cart;
