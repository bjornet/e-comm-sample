'use client';

import { FC } from 'react';

import { useProductsContext } from '$context/products/productsContext';
import { ProductList } from '$components/ProductList';

const ProductsPage: FC = () => {
  const { products } = useProductsContext();

  return (
    <div className="grid gap-8">
      <h1>Here are our unique and very expensive products</h1>

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
