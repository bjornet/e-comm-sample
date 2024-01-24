# A Next.js Tailwind Storybook E-Commerce Sample

## Description

This is a simple e-commerce sample frontend app built with React and Next.js.

## Technologies

- [Next.js](https://nextjs.org/) for routing and server side rendering
- [TypeScript](https://www.typescriptlang.org/) for enhanced DX through type safety and intellisense
- [React](https://reactjs.org/) for the UI
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Eslint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.18.0 or higher)

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/bjornet/e-comm-sample.git
cd e-comm-sample
```

### 2. Install dependencies

```sh
npm install
```

## Development

**IMPORTANT!** This app is not ready for production.

Yey, now you can run the app locally!

### Start the development server

Run `npm run dev` to start the development server.

### Component Testing

Run `npm run storybook` to boot up Storybook and start developing components in isolation.

### Linting and Formatting

Linting: Run `npm run lint` to identify and fix linting issues. Formatting: Run `npm run format` to format your code using Prettier.

## Building

### Production Build

Run `npm run build` to build the app for production to the dist folder.

## High Priority Improvements

1. **Cart** The cart is not fully implemented. The cart should be able to add and remove items.
2. **RSC** The app is not making use of React Server Components. This would be a great fit for the app since it is a good candidate for SSR. This would improve the performance of the app as well as get rid of hard to manage hydration issues.

## Other Improvements

1. **Stability** The codebase would gain a lot from adding a pre-commit hook that runs a baseline of tests and linting. This would ensure that the codebase is stable and consistent. Husky and lint-staged would be a great fit for this.
2. **Error Handling** The app is missing error handling. This is a must for a production ready app. The app should handle errors from the API and display a user friendly error message.
3. **Accessibility** The app is missing accessibility features. This is a must for a production ready app. The app should be accessible for all users.
