export const sortByMenuOrder = (items) => {
  return items.sort((a, b) => a?.menu_order - b?.menu_order);
};

export const cleanTextFromTags = (str) => str.replace(/<\/?[^>]+(>|$)/g, '');

export const viewTypes = {
  combo: 'COMBO',
  select: 'SELECT',
  toppings: 'TOPPINGS',
  nonextended: 'NONEXTENDED',
};

export const ExtendedProductsViewTypes = {
  [viewTypes.combo]: {
    title: 'combo',
    views: ['select', 'toppings'],
  },
  [viewTypes.select]: {
    title: 'select',
    views: ['select'],
  },
  [viewTypes.toppings]: {
    title: 'toppings',
    views: ['toppings'],
  },
  [viewTypes.nonextended]: {
    title: 'nonextended',
    views: [],
  },
};
