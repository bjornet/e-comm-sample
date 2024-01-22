import { FetchProductsResonse, Product } from '$api/products/types';

export type ProductsContextProps = {
  products: FetchProductsResonse;
  getProductById: (id: string) => Product | undefined;
};
