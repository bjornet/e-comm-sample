'use client';

import { Minicart } from '$components/Minicart';
import { useCartContext } from '$context/cart/cartContext';

const Header = () => {
  const { cartItems } = useCartContext();

  return (
    <header className="p-4 bg-emerald-950 flex justify-between">
      <h1>Nordiska Galleriet - Frontend Test</h1>
      <Minicart items={cartItems} />
    </header>
  );
};

export { Header };
