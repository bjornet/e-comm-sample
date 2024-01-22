import { FC, Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CartProps } from './types';
import { getTotal } from './actions';

const Cart: FC<CartProps> = ({ items = [] }) => {
  /**
   * @note The extra state here is to avoid hydration issues
   * I cannot evaluate how real they are, but Next warns about them in dev mode
   * Working with RSC all the way – will most probably solve this issue.
   */
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartProps['items']>([]);

  useEffect(() => {
    setTotal(getTotal(items));
    setCartItems(items);
  }, [items]);

  return (
    <div className="p-4 rounded-sm bg-emerald-800">
      <div className="grid gap-x-2 gap-y-2 items-center grid-cols-[auto_1fr]">
        {cartItems.map(({ product, quantity }) => (
          <Fragment key={product.id}>
            <div className="relative w-16 h-16">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>

            <div className="flex flex-col gap-1">
              <Link href={`/products/${product.id}`}>{product.name}</Link>

              <div className="flex gap-2 items-center">
                <span className="text-sm font-semibold">${product.price}</span>
                <span className="text-sm font-semibold">x</span>
                <span className="text-sm font-semibold">{quantity}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="flex gap-4 justify-end items-center">
        <span className="uppercase text-xs font-extrabold">Total</span>
        <span className="p-1 bg-emerald-100 text-emerald-700 rounded-md">${total}</span>
      </div>
    </div>
  );
};

export { Cart };
