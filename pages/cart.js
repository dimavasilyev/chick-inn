import React, { useState } from 'react';
import Layout from '../components/layout';

import CartProductsList from '../components/cart-products-list/cart-products-list';
import OrderForm from '../components/order-form';
import { useCart } from '../hooks';

const Cart = () => {
  const [formSuccess, setSuccess] = useState(false);

  const { items } = useCart();

  return (
    <Layout>
      {formSuccess ? (
        <div className="text-5xl text-white">thanks</div>
      ) : (
        <div className="cart-container bg-black lg:w-1/2 mx-auto p-6 lg:p-8">
          <CartProductsList />
          {items.length > 0 && <OrderForm onFinish={() => setSuccess(true)} />}
        </div>
      )}

      <style jsx>{`
        .cart-container {
          border-radius: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Cart;
