import '../styles/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { CartProvider } from '../components/cart-provider/cart-provider';
import { ProductsProvider } from '../components/products-provider/products-provider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </CartProvider>
  );
}

export default MyApp;
