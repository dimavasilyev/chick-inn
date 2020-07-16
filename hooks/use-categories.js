import { useContext } from 'react';
import { CategoriesContext } from '../components/categories-provider/categories-provider';

const useCategories = () => useContext(CategoriesContext);

export default useCategories;
