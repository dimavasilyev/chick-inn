import { useContext } from 'react';
import { ProductsContext } from '../components/products-provider/products-provider';

const useProducts = () => useContext(ProductsContext);

export default useProducts;
