'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { Maybe } from '$types/types';
import { fetchProducts } from '$api/products';
import { FetchProductsResonse } from '$api/products/types';

import { ProductsContextProps } from './types';

const ProductsContext = createContext<Maybe<ProductsContextProps>>(null);

export const ProductsProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [products, setProducts] = useState<FetchProductsResonse>({
    products: [],
    status: 'loading',
    message: '',
  });

  useMemo(async () => {
    const res = await fetchProducts();

    setProducts(res);
  }, []);

  const valueMemoized = useMemo(() => ({ products }), [products]);

  return <ProductsContext.Provider value={valueMemoized}>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }

  return context;
};
