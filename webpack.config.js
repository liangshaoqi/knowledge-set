/* eslint-disable */
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口文件
  entry: {
    index: path.resolve('src/index.js'),
    login: path.resolve('src/login.js')
  },
  // 出口文件
  output: {
    filename: '[name].js', // 打包后的文件名称
    path: path.resolve(__dirname, './dist') // 打包之后的目录
  },
  // 处理对应模块
  module: {
    rules: [
      {
        test: /\.css$/, // 解析css
        use: ['style-loader', 'css-loader'] // 从左向右解析
      }
    ]
  },
  // 对应插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'] // 对应入口的键名称
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/login.html'),
      filename: 'login.html',
      chunks: ['login']
    })
  ],
  // 开发服务器配置
  devServer: {},
  // 模式配置
  mode: 'development'
}