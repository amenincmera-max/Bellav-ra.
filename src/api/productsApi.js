import { products } from '../data/products';

export function fetchProducts() {
  return Promise.resolve(products);
}
