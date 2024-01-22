import { FC } from 'react';

import { ProductCard } from '$components/ProductCard';

import { ProductListProps } from './types';

const ProductList: FC<ProductListProps> = ({ products = [] }) => (
  <div>
    {products.length === 0 && <p>No products available.</p>}
    <ul>
      {products.map(({ id, name, price, image }) => (
        <li key={id}>
          <ProductCard name={name} price={price} image={image} />
        </li>
      ))}
    </ul>
  </div>
);

export { ProductList };
