import { FC, MouseEventHandler } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCartContext } from '$context/cart/cartContext';

import { ProductCardProps } from './types';

const ProductCard: FC<ProductCardProps> = ({ id, name, price, image }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    addToCart(id);
  };

  return name ? (
    <Link href={`/products/${id}`}>
      <div className="bg-yellow-200 grid justify-center text-center gap-4 rounded-md w-max">
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className="rounded-ss-md rounded-se-md"
        />

        <div className="grid gap-1 pl-4 pr-4 text-emerald-500">
          <div>{name}</div>
          <div className="text-xl font-bold pt-1 pb-1">${price}</div>
        </div>

        <button
          className="bg-emerald-400 pt-4 pb-4 rounded-es-md rounded-ee-md hover:bg-emerald-200 hover:text-emerald-700"
          type="button"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  ) : (
    <p>Missing data for this product</p>
  );
};

export { ProductCard };
