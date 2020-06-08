import '../styles/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { CartProvider } from '../components/cart-provider/cart-provider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
