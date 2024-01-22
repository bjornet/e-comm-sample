import { FC } from 'react';
import Image from 'next/image';

import { ProductCardProps } from './types';

const ProductCard: FC<ProductCardProps> = ({ name, price, image }) =>
  name ? (
    <div className='grid'>
      <Image src={image} width={200} height={200} alt={name} />
      <p>{name}</p>
      <p>${price}</p>
    </div>
  ) : (
    <p>Missing data for this product</p>
  );

export { ProductCard };
