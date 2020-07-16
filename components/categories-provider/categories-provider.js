import React, { createContext, useState, useEffect } from 'react';

import api from '../../api';
import { sortByMenuOrder } from '../../helpers';

const CategoriesContext = createContext({});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await api.getCategories();
    const categories = sortByMenuOrder(data);

    setCategories(categories.filter((category) => category.slug !== 'uncategorized'));
  };

  return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};

export { CategoriesProvider, CategoriesContext };
