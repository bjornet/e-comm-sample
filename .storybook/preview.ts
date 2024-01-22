import type { Preview } from '@storybook/react';

import '../.next/static/css/app/layout.css';
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
};

export default preview;
