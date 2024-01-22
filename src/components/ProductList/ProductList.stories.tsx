import { Meta, StoryObj } from '@storybook/react';

import { ProductList } from '$components/ProductList';
import mockProductsResponse from '$api/products/mock/mockProductsResponse.json';

import { ProductListProps } from './types';

export default {
  title: 'Components/ProductList',
  component: ProductList,
  args: mockProductsResponse,
} as Meta<ProductListProps>;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    products: [],
  },
};
