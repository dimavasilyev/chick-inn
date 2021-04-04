import '../styles/index.css';
import { CartProvider } from '../components/cart-provider/cart-provider';
import { ProductsProvider } from '../components/products-provider/products-provider';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const strausUrl = 'https://www.straus.md/ru/restaurant/chickinn/';

  //   window.location.replace(strausUrl);
  // }, []);
  return (
    <CartProvider>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </CartProvider>
  );
}

export default MyApp;
