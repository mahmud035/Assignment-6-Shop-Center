import { products } from '../data/products';

export const getProduct = (id) => {
  const product = products.find((product) => product.id.toString() === id);
  return product;
};
