'use client';

import { FC, Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MinicartProps } from './types';
import { getCount, getTotal } from './actions';

const Minicart: FC<MinicartProps> = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * @note The extra state here is to avoid hydration issues
   * I cannot evaluate how real they are, but Next warns about them in dev mode
   * Working with RSC all the way – will most probably solve this issue.
   */
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCount(items));
  }, [items]);

  const total = getTotal(items);

  const handleClickTrigger = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClassList = isOpen ? 'absolute right-0 mt-2' : 'hidden';

  return (
    <div className="relative">
      <button type="button" onClick={handleClickTrigger}>
        <div className="inline-block bg-slate-200 p-2 rounded-full">🛒</div>
        <div className="absolute bg-red-400 inline-flex justify-center -translate-x-3 -translate-y-2 w-5 min-w-fit rounded-full shadow-md text-sm">
          {count}
        </div>
      </button>

      <div className={dropdownClassList}>
        <div className="grid gap-2 min-w-max bg-emerald-700 shadow-2xl w-200 rounded-md pt-3">
          {count > 0 ? (
            <>
              <div className="grid gap-x-2 gap-y-2 items-center grid-cols-[auto_auto_auto_1fr] pr-4 pl-4">
                {items.map(({ product, quantity }) => (
                  <Fragment key={product.id}>
                    <Image src={product.image} alt={product.name} width={30} height={30} />
                    <Link href={`/products/${product.id}`}>
                      <span>{product.name}</span>
                    </Link>
                    <span className="ml-4">
                      <span className="uppercase text-xs">Qty</span> {quantity}
                    </span>
                    <span className="p-1 bg-emerald-100 text-emerald-700 rounded-md ml-2">
                      ${product.price}
                    </span>
                  </Fragment>
                ))}
              </div>

              <div className="flex gap-4 justify-end items-center pr-4 pl-4">
                <span className="uppercase text-xs font-extrabold">Total</span>
                <span className="p-1 bg-emerald-100 text-emerald-700 rounded-md">${total}</span>
              </div>

              <Link
                href="/checkout"
                className="bg-emerald-200 text-emerald-900 p-2 mt-4 rounded-es-md rounded-ee-md text-center"
              >
                Checkout
              </Link>
            </>
          ) : (
            <div className="pb-3 pl-3 pr-3">Cart is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Minicart };
