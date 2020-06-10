import { useContext } from 'react';
import { CartContext } from '../components/cart-provider/cart-provider';

const useCart = () => useContext(CartContext);

export default useCart;
