import { FC } from 'react';

import { ProductCard } from '$components/ProductCard';

import { ProductListProps } from './types';

const ProductList: FC<ProductListProps> = ({ products = [] }) =>
  products.length > 0 ? (
    <ul className="flex gap-6 flex-wrap">
      {products.map(({ id, name, price, image }) => (
        <li key={id}>
          <ProductCard name={name} price={price} image={image} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No products available.</p>
  );

export { ProductList };
