import { ProductsProvider } from '$context/products/productsContext';

const ProductsProviderDecorator = (Story: any) => (
  <ProductsProvider>
    <Story />
  </ProductsProvider>
);

export { ProductsProviderDecorator };
