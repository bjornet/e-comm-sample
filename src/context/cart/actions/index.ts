import { GetProductbyId, IsItemInCart, NewCartItem, UpdateItemInCart } from './types';

export const isItemInCart: IsItemInCart = (id, cartItems) =>
  cartItems.find((item) => item.product.id === id);

export const getProductbyId: GetProductbyId = (id, products) =>
  products.find((product) => product.id === id);

export const updateItemInCart: UpdateItemInCart = (id) => (item) =>
  item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item;

export const newCartItem: NewCartItem = (product, cartItems) => [
  { product, quantity: 1 },
  ...cartItems,
];
