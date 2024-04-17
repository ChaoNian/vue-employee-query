const {Configuration} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type{Configuration}
 */
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    // eval-cheap-module-source-map cheap-module-source-map cheap-module-eval-source-map
    // devtool: 'eval-cheap-source-map', // 调试时对sourcemaps的最佳支持
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index..html'
        })
    ]
}