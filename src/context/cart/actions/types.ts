import { Product } from '$api/products/types';
import { Maybe } from '$types/types';

import { CartItem } from '../types';

export type IsItemInCart = (id: Product['id'], cartItems: CartItem[]) => Maybe<CartItem>;

export type GetProductbyId = (id: Product['id'], products: Product[]) => Maybe<Product>;

export type UpdateItemInCart = (id: Product['id']) => (item: CartItem) => CartItem;

export type NewCartItem = (product: Product, cartItems: CartItem[]) => CartItem[];
