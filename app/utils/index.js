import { products } from '../data/products';

export const getProduct = (id) => {
  const product = products.find((product) => product.id.toString() === id);
  return product;
};

export const getUniqueCategories = () => {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  return uniqueCategories;
};
