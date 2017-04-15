var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractLess = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders:
    [
      {
        test: /\.less$/,
        loader:
          extractLess.extract(
            //当无法抽取到css文件时额外使用 style-loader
            'style',
            //正常解析less时使用 less-loader -> css-loader
            'css?sourceMap!less?sourceMap'
          )
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=img/[name].[ext]'
      }
    ]
  },
  plugins: [
    extractLess
  ],
  devtool: 'inline-source-map'
};