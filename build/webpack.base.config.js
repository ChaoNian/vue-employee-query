// const { VueLoaderPlugin } = require('vue-loader')
// const { Configuration } = require('webpack')

// /**
//  * @type{Configuration}
//  */
// module.exports = {
//   output: {
//     filename: 'employee-query.js'
//   },
//   stats: 'errors-only',

//   resolve: {
//     extensions: ['.js', '.ts', '.tsx', '.vue'],
//     alias: {
//       'vue': 'vue/dist/vue.esm.js'
//     }
//   },

//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: [
//           {
//             loader: 'ts-loader', // 将typescript转成javascript
//             // exclude: /node_modules/,
//             options: {
//               /**
//                * appendTsSuffixTo:会给对应文件添加个.ts或.tsx后缀
//                * vue 单文件组件中使用了lang="ts"，ts-loader需要配置appendTsSuffixTo: [/\.vue$/]，用来给.vue文件添加个.ts后缀用于编译
//                */
//               appendTsSuffixTo: [/\.vue$/]
//             }

//           }
//         ]
//       },
//       {
//         test: /\.vue$/,
//         // exclude: /node_modules/,
//         loader: 'vue-loader'
//       },

//       {
//         test: /\.css$/,
//         use: [
//           'styles-loader',
//           'vue-style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   },

//   plugins: [
//     new VueLoaderPlugin()
//   ]
// }
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: 'none',
    output: {
        filename: 'employee-query.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', 'vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
