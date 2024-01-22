import { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from '$components/ProductCard';

import { ProductCardProps } from './types';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  args: {
    name: 'Name of the product',
    price: 100,
    image: '/assets/images/products/bread.png',
  },
} as Meta<ProductCardProps>;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
