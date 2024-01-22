import { FC, PropsWithChildren } from 'react';

import { ProductsProvider } from '$context/products/productsContext';

const ProductsLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ProductsProvider>{children}</ProductsProvider>
);
export default ProductsLayout;
