'use client';

import { FC } from 'react';

import { useProductsContext } from '$context/products/productsContext';
import { ProductDetails } from '$components/ProductDetails';

const DetailsPage: FC<
  Readonly<{
    params: {
      slug: string;
    };
  }>
> = ({ params: { slug } }) => {
  const { getProductById } = useProductsContext();

  const product = getProductById(slug);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { id, description, image, name, price } = product;

  return (
    <ProductDetails id={id} description={description} image={image} name={name} price={price} />
  );
};

export default DetailsPage;
