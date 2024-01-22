'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Maybe } from '$types/types';
import { Product } from '$api/products/types';
import { useProductsContext } from '$context/products/productsContext';
import { storeManager } from 'src/store';
import { StoreSegments } from 'src/store/enums';

import { CartItem, CartContextProps } from './types';
import { getProductbyId, isItemInCart, newCartItem, updateItemInCart } from './actions';

const CartContext = createContext<Maybe<CartContextProps>>(null);

export const CartProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { products } = useProductsContext();

  /**
   * @note when cartItems is updated would be a good time to push the cart to the server
   *
   * @note when cartItems is updated would be a good time to persist the cart to localStorage
   * @note when the app loads would be a good time to hydrate the cart from localStorage
   */
  const [cartItems, setCartItems] = useState<CartItem[]>(storeManager.get(StoreSegments.CART) || []);

  useEffect(() => {
    storeManager.set(StoreSegments.CART, cartItems);
  }, [cartItems]);

  const addToCart = useCallback(
    (id: Product['id']) => {
      const product = getProductbyId(id, products.products);

      if (!product) {
        throw new Error(`Product with id ${id} not found.`);
      }

      setCartItems(
        isItemInCart(id, cartItems)
          ? cartItems.map(updateItemInCart(id))
          : newCartItem(product, cartItems)
      );
    },
    [cartItems, products]
  );

  const valueMemoized = useMemo(() => ({ cartItems, addToCart }), [cartItems, addToCart]);

  return <CartContext.Provider value={valueMemoized}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};
