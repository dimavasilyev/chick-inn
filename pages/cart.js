import React, { useState } from 'react';
import Layout from '../components/layout';

import CartProductsList from '../components/cart-products-list/cart-products-list';
import OrderForm from '../components/order-form';
import { useCart } from '../hooks';
import CheckMark from '../assets/checkmark.png';

const Cart = () => {
  const [formSuccess, setSuccess] = useState(false);

  const { items } = useCart();

  return (
    <Layout>
      <div className="cart-container bg-black lg:w-1/2 mx-auto p-4 md:p-6 lg:p-8">
        {formSuccess ? (
          <div className="text-3xl md:text-5xl font-semibold text-white text-center">
            Vă mulțumim pentru comanda
            <img src={CheckMark} />
          </div>
        ) : (
          <>
            <CartProductsList />
            {items.length > 0 && <OrderForm onFinish={() => setSuccess(true)} />}
          </>
        )}
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
