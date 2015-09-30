# Boilerplate for a Koa Redux React app with Webpack, Mocha, SASS, Babel, ESLint...

## Docs

[Detailed blogpost on how was this boilerplate built](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/)

Good to understand what's what.

## Instructions

1. **Clone repo**

    git clone https://github.com/mezod/boilerplate-koa-redux-react.git

2. **Install dependencies**

    npm install

3. **Run the webserver**

    npm run webserver

    Webserver should be running at http://localhost:3000/

4. **Make build**

   npm run build

5. **Run development server**

   npm run dev

   Development server should be running at http://localhost:8080/

## Real project using this boilerplate

[www.listlogs.com](https://github.com/mezod/listlogs) - under development

## List of techs

- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Koa](http://koajs.com/) - api framework
- [koa-router](https://github.com/alexmingoia/koa-router) - api router
- [koa-cors](https://github.com/koajs/cors) - cors support
- [Bookshelf.js](http://bookshelfjs.org/) - ORM
- [knex](http://knexjs.org/) - query builder
- [mysql](https://github.com/felixge/node-mysql) - MySQL driver for JS
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - interfaces
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux
- [Immutable](https://github.com/facebook/immutable-js) - data structures
- [Redux](https://github.com/rackt/redux) - awesome flux architecture
- [redux-thunk](https://github.com/gaearon/redux-thunk) - thunk middleware for redux
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Chai](http://chaijs.com/) - assertion library
- A bunch of useful scripts

## Scripts
- **npm run webserver**

     Starts Koa server

- **npm run test**

     Runs unit tests

- **npm run test:watch**

     Watches for changes to run unit tests

- **npm run build**

     Bundles the application

- **npm run dev**

     Starts webpack development server

- **npm run lint**

     Runs the linter

- **npm run deploy**

     Creates the production ready files

- **npm run clean**

    Removes the bundled code and the production ready files

