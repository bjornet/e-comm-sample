import { FC } from 'react';
import Image from 'next/image';

import { useCartContext } from '$context/cart/cartContext';

import { ProductDetailsProps } from './types';

const ProductDetails: FC<ProductDetailsProps> = ({ id, name, price, image, description }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(id);
  };

  return id ? (
    <div className="grid gap-x-4 w-full bg-emerald-100 grid-cols-[auto_1fr]">
      <Image
        src={image}
        width={200}
        height={200}
        alt={name}
        className='row-span-2'
      />

      <div className="grid gap-1 text-emerald-500 pt-4">
        <div>{name}</div>
        <div className="text-xl font-bold">${price}</div>
      </div>

      <div className='text-emerald-950'>{description}</div>

      <button
        className="bg-emerald-400 pt-4 pb-4 hover:bg-emerald-200 hover:text-emerald-700 col-span-2"
        type="button"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  ) : (
    <p>Missing product.</p>
  );
};

export { ProductDetails };
