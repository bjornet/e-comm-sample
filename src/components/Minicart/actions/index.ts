/**
 * @todo Type any
 */
type GetCount = (items: any[]) => number;

export const getCount: GetCount = (items) =>
  items && Array.isArray(items) ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

/**
 * @todo Type any
 */
type GetTotal = (items: any[]) => number;

export const getTotal: GetTotal = (items) =>
  items.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
