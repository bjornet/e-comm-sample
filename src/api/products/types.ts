export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Products = Product[];

export type FetchProductsResonse = {
  products: Products;
  status?: string;
  message?: string;
};

export type FetchProducts = () => Promise<FetchProductsResonse>;
