# Getting Started with LISTIFY

## Project Overview
This project was primary built using **Create React App** with the latest versions of **ReactJS**, **TypeScript**, and additional libraries. But due to the deprecation of **Create React App**, I migrated it to **Vite**.
Now this is a Vite + React + TypeScript project for listing posts :P

## Technologies Used
- **Vite**: Next Generation Frontend Tooling.
- **React i18next**: Used for internationalization and language support.
- **Ant Design**: A comprehensive UI framework for React applications.

## Installation of the dependencies
It's super easy one:

```sh
npm install
```

Alternatively, if using Yarn:

```sh
yarn install
```

## Running the Application
To start the development server, use:

```sh
npm run dev
```

or

```sh
yarn dev
```

The site runs in **development mode**. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If you want to change the running port, you need to go to vite.config.ts and change port: 3000 to the port you want.

## Building the Application
To create a production-ready build, use:

```sh
npm run build
```

or

```sh
yarn build
```

This will generate a `dist/` directory with optimized static files ready for deployment.

## Future Improvements
There is still a lot to be done in this application, not only in parts of design but also functionality. 
Some potential enhancements include:
- **Pagination**, **filters**, sorting, and different **views for posts**.
- Additional functionality to make the application more complex and feature-rich.
- Implementing **ErrorBoundary** for better error handling.
- Adding **unit and integration tests** to improve reliability.

I didn't include **ErrorBoundary** and tests as I spent some time exploring **Ant Design**.



