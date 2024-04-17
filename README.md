# vue-employee-query
vue2、typescript 、webpack created library 

学习 vue 工程下 ts 实践

安装依赖
```json
"dependencies": {
    "vue": "^2.6.10",
    "vue-class-component": "^7.1.0",
    "vue-property-decorator": "^8.2.1"
  },
"devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.0.4",
    "typescript": "^3.5.3",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.8.0",
    "webpack-merge": "^4.2.1",
    "webpack-node-externals": "^1.7.2"
  },
```


过程遇到的问题
1. 报错
 ```js
Error: @vitejs/plugin-vue requires vue (>=3.2.13) or @vue/compiler-sfc to be present in the dependency tree.
```
因为先vue 是2.xx 的版本
安装 pnpm install @vue/compiler-sfc

如果vue.3.xx版本
 需要 pnpm install vue@3.xx
 或者  pnpm install @vue/compiler-sfc@3.xx


2. 报错 merge is not a function

 ```js
  // webpack >5.xx 版本
  // const merge = require('webpack-merge') 改为如下
  const {merge} = require('webpack-merge')
 ```

1. 报错
  ```js
   Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
  configuration.devtool should match pattern "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$".
   BREAKING CHANGE since webpack 5: The devtool option is more strict.
   Please strictly follow the order of the keywords in the pattern.
  ```
报错信息 "Invalid configuration object. Webpack has been initialized using a configuration" 表示 Webpack 配置对象无效。这可能是由于配置文件中的语法错误、使用了不支持的选项，或者配置对象不符合 Webpack 预期格式导致的。