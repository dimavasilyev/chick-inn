import '../styles/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { CartProvider } from '../components/cart-provider/cart-provider';
import { CategoriesProvider } from '../components/categories-provider/categories-provider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <CategoriesProvider>
        <Component {...pageProps} />
      </CategoriesProvider>
    </CartProvider>
  );
}

export default MyApp;
