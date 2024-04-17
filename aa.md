    ```json
    {
  "name": "vue-employee-query-01",
  "version": "1.0.0",
  "description": "vue2、typescript 、webpack created library",
  "main": "./dist/employee-query.js",
  "scripts": {
    "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
    "build": "webpack --mode=production --config ./build/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^7.1.1",
    "html-webpack-plugin": "^5.6.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.4.5",
    "vue-loader": "^17.4.2",
    "vue-template-compiler": "^2.7.16",
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.4",
    "webpack-merge": "^5.10.0",
    "webpack-node-externals": "^3.0.0"
  },
  "dependencies": {
    "@vue/compiler-sfc": "^3.4.22",
    "npm": "^10.5.2",
    "styles-loader": "^4.0.1",
    "vue": "^2.7.16",
    "vue-class-component": "^7.2.6",
    "vue-property-decorator": "^9.1.2",
    "vue-style-loader": "^4.1.3"
  },
  "types": "./types/employee-query.d.ts"
}

    ```