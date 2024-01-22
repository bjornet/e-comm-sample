'use client';

import { FC } from 'react';

import { useProductsContext } from '$context/products/productsContext';
import { ProductList } from '$components/ProductList';

const ProductsPage: FC = () => {
  const { products } = useProductsContext();

  return (
    <div>
      <h1>Products</h1>

      {products.status === 'loading' && <p>Loading...</p>}

      {products.status === 'error' && <p>Something went wrong: {products.status === 'error'}</p>}

      {products.status === 'success' && !products.products.length && <p>No products available.</p>}

      {products.status === 'success' && products.products.length && (
        <ProductList products={products.products} />
      )}
    </div>
  );
};

export default ProductsPage;
