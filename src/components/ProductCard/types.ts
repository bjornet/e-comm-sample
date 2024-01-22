import { Product } from '$api/products/types';

export type ProductCardProps = {
  name: Product['name'];
  price: Product['price'];
  image: Product['image'];
};
