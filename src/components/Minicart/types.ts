import { Product } from '$api/products/types';

export type MinicartProps = {
  items: {
    product: Product;
    quantity: number;
  }[];
};
