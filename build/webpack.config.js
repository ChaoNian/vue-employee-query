const {Configuration} = require('webpack')
// const {merge} = require('webpack-merge')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config') 
const devConfig = require('./webpack.dev.config') 
const proConfig = require('./webpack.pro.config') 

/**
 * @type{Configuration}
 */
module.exports = (env, argv) => {
    // mode 在package.json  脚本设置
    let config = argv.mode = 'development' ? devConfig : proConfig
    return merge(baseConfig, config)
}