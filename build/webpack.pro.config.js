const {Configuration} = require('webpack')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
// const NodeExternals = require('webpack-node-externals')

/**
 * @type{Configuration}
 */
module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        libraryTarget:'umd',
        library: 'EmployeeQuery' // 打包出来的库名字
    },
    // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies) 。
    // 主要用于排除Node.js中的内置模块和 node_modules 中的第三方模块，使它们不被打包进最终的输出文件中。
    // externals: [NodeExternals()],
    plugins:[
        new CleanWebpackPlugin()
    ]
}