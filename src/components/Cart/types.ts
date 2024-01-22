import { Product } from '$api/products/types';

export type CartProps = {
  items: {
    product: Omit<Product, 'description'>;
    quantity: number;
  }[];
};
