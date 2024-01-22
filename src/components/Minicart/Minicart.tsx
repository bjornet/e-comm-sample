'use client';

import { FC, Fragment, useState } from 'react';
import Link from 'next/link';

import { MinicartProps } from './types';
import { getCount, getTotal } from './actions';

const Minicart: FC<MinicartProps> = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const count = getCount(items);
  const total = getTotal(items);

  const handleClickTrigger = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClassList = isOpen ? 'absolute right-0 mt-2' : 'hidden';

  return (
    <div className="relative">
      <button type="button" onClick={handleClickTrigger}>
        <div className="inline-block bg-slate-200 p-2 rounded-full">🛒</div>
        {count > 0 && (
          <div className="absolute bg-red-400 inline-flex justify-center -translate-x-3 -translate-y-3 w-6 min-w-fit rounded-full shadow-md">
            {count}
          </div>
        )}
      </button>

      <div className={dropdownClassList}>
        <div className="grid gap-2 min-w-max bg-emerald-700 shadow-sm w-200 rounded-md pt-3">
          {count > 0 ? (
            <>
              <div className="grid gap-x-4 gap-y-2 items-center grid-cols-[auto_auto_1fr] pr-4 pl-4">
                {items.map(({ product, quantity }) => (
                  <Fragment key={product.id}>
                    <span>{product.name}</span>
                    <span>
                      <span className="uppercase text-xs">Qty</span> {quantity}
                    </span>
                    <span className="p-1 bg-emerald-100 text-emerald-700 rounded-md">
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
                href="/cart"
                className="bg-emerald-200 text-emerald-900 p-2 mt-4 rounded-es-sm rouned-ee-sm text-center"
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
