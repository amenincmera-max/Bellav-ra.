import cardigan from '../assets/cardigan.jpg';
import hoodie from '../assets/hoodie.jpg';
import jacket from '../assets/jacket.jpg';
import jeans from '../assets/jeansmen.jpg';
import shirt from '../assets/shirt.jpg';
import sweater from '../assets/sweater.jpg';

export function formatPrice(price) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export const products = [
  {
    id: 1,
    title: 'Jacket',
    price: 199,
    category: "Women's Clothing",
    image: jacket,
    featured: false,
  },
  {
    id: 2,
    title: 'Hoodie',
    price: 29.99,
    category: "Men's Clothing",
    image: hoodie,
    featured: false,
  },
  {
    id: 3,
    title: 'Cardigan',
    price: 45.99,
    category: "Women's Clothing",
    image: cardigan,
    featured: false,
  },
  {
    id: 4,
    title: 'Shirt',
    price: 29.99,
    category: "Men's Clothing",
    image: shirt,
    featured: false,
  },
  {
    id: 5,
    title: 'Sweater',
    price: 49.99,
    category: "Women's Clothing",
    image: sweater,
    featured: false,
  },
  {
    id: 6,
    title: 'Jeans',
    price: 49.99,
    category: "Men's Clothing",
    image: jeans,
    featured: false,
  },
];

export default products;
