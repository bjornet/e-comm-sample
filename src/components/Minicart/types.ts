import { Product } from '$api/products/types';

export type MinicartProps = {
  items: {
    product: Omit<Product, 'description'>;
    quantity: number;
  }[];
};
