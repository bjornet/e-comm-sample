import { Product } from '$api/products/types';

export type ProductCardProps = Omit<Product, 'description'>;
