'use client';

import { Cart } from '$components/Cart';
import { CheckoutForm } from '$components/CheckoutForm';
import { useCartContext } from '$context/cart/cartContext';

const CheckoutPage = () => {
  const { cartItems } = useCartContext();

  return (
    <div className='grid gap-6'>
      <h1>Checkout This!</h1>

      <Cart items={cartItems} />

      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
