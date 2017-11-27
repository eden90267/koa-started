var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src', 'js'),
  entry: {
    bundle: './app.jsx',
    vendors: [
      'babel-polyfill'
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/assets/', /* webpack 使用 require 時參考的路徑 */
    path: path.join(__dirname, 'public', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2017', 'stage-0']
        }
      }
    ]
  }
};