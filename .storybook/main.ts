import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

import tailwindConfig from '../tailwind.config.ts';


const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config || !config.module || !config.module.rules) return config;

    console.log(tailwindConfig);


    // Load Tailwind CSS as a PostCSS plugin
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss')(tailwindConfig),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },

};
export default config;
