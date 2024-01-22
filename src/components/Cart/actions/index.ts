/**
 * @todo Type any
 * @todo This is a duplciate of the function in src/components/MiniCart/actions/index.ts. DRY it up.
 */
type GetCount = (items: any[]) => number;

export const getCount: GetCount = (items) =>
  items && Array.isArray(items) ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

/**
 * @todo Type any
 * @todo This is a duplciate of the function in src/components/MiniCart/actions/index.ts. DRY it up.
 */
type GetTotal = (items: any[]) => number;

export const getTotal: GetTotal = (items) =>
  items.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
