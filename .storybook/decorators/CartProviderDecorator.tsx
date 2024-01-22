import { CartProvider } from '$context/cart/cartContext';

const CartProviderDecorator = (Story: any) => (
  <CartProvider>
    <Story />
  </CartProvider>
);

export { CartProviderDecorator };
