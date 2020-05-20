import '../styles/index.css';

import { CartProvider } from '../components/cart-provider/cart-provider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
