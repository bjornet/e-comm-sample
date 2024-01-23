import { Meta, StoryObj } from '@storybook/react';

import { Minicart } from '$components/Minicart';

import { MinicartProps } from './types';

export default {
  title: 'Components/Minicart',
  component: Minicart,
  args: {
    items: [
      {
        product: {
          name: 'Short Name',
          price: 100,
          id: '1',
          image: 'https://via.placeholder.com/150',
        },
        quantity: 1,
      },
      {
        product: {
          name: 'A much longer name',
          price: 200,
          id: '2',
          image: 'https://via.placeholder.com/150',
        },
        quantity: 4,
      },
    ],
  },
  render: (args) => (
    <div className="flex justify-end">
      <Minicart {...args} />
    </div>
  ),
} as Meta<MinicartProps>;

type Story = StoryObj<typeof Minicart>;

export const Default: Story = {};

export const NoItems: Story = {
  args: {
    items: [],
  },
};
