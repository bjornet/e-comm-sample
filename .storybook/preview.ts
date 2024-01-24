import type { Preview } from '@storybook/react';

import { CartProviderDecorator, ProductsProviderDecorator } from './decorators';
import { viewports } from './config';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#fafafa' },
        { name: 'dark', value: '#064E3B' },
      ],
    },
    viewport: viewports,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [CartProviderDecorator, ProductsProviderDecorator],
};

export default preview;
