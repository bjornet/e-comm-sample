import { Product } from '$api/products/types';

export type CartItem = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
};

export type CartContextProps = { cartItems: CartItem[]; addToCart: (id: Product['id']) => void };
