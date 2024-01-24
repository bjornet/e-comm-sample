import '../src/styles/globals.css';

import type { Preview } from '@storybook/react';

/**
 * Targeting this file works but it's not ideal.
 * Ideally we would target some Tailwind css output,
 * but I'm not sure how to do that. This solution is a bit janky since
 * it seems to rely on the next dev server running (not CI friendly and sub-optimal DX).
 */
import { CartProviderDecorator, ProductsProviderDecorator } from './decorators';

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
