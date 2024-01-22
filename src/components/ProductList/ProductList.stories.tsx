import { Meta, StoryObj } from '@storybook/react';

import { ProductList } from '$components/ProductList';

import { ProductListProps } from './types';

export default {
  title: 'Components/ProductList',
  component: ProductList,
} as Meta<ProductListProps>;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
