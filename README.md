# Getting Started with LISTIFY

## Project Overview
This project is built using **Create React App** with the latest versions of **ReactJS**, **TypeScript**, and additional libraries.

## Technologies Used
- **React i18next**: Used for internationalization and language support.
- **Ant Design**: A comprehensive UI framework for React applications.

## Installation
Due to compatibility issues and conflicts with the latest versions of dependencies, it is recommended to install node modules with the `--force` flag. Оtherwise it will be devastating:

```sh
npm install --force
```

Alternatively, if using Yarn:

```sh
yarn install
```

## Running the Application
To start the development server, use:

```sh
npm start
```

or

```sh
yarn start
```

The site runs in **development mode**. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building the Application
To create a production-ready build, use:

```sh
npm run build
```

or

```sh
yarn build
```

This will generate a `build/` directory with optimized static files ready for deployment.

## Notes
- Ensure you have the latest **Node.js** version installed to avoid potential conflicts.
- If you encounter issues, try removing `node_modules` and `package-lock.json` (or `yarn.lock`) before reinstalling dependencies.

```sh
rm -rf node_modules package-lock.json
npm install --force
```

or

```sh
rm -rf node_modules yarn.lock
yarn install --force
```

## Future Improvements
There is still a lot to be done in this application, not only in parts of design but also functionality. 
Some potential enhancements include:
- **Pagination**, **filters**, sorting, and different **views for posts**.
- Additional functionality to make the application more complex and feature-rich.
- Implementing **ErrorBoundary** for better error handling.
- Adding **unit and integration tests** to improve reliability.

I didn't include **ErrorBoundary** and tests as I spent some time exploring **Ant Design**.



