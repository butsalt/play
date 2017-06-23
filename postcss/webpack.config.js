var ExtractTextPlugin = require('extract-text-webpack-plugin');

var postcssImport = require('postcss-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    publicPath: "./dist/",
    path: './dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          //当css文件不会被导出时，在经过postcss-loader，css-loader的基础上需要再使用style-loader
          //style-loader可以使得当前js文件被加载时，style module以inline形式被写入到页面
          'style-loader',
          //样式文件会依次经过postcss-loader，css-loader
          //css-loader使得css文件可以被webpack解析成模块
          'css-loader?sourceMap!postcss-loader',
          {
            //需要重写publicPath才能使css文件中的url指向正常
            publicPath: './'
          }
        )
      },
      {
        test: /\.(png|jpg)$/,
        //会读取css中相对路径表示的png/jpg文件成模块
        //资源文件同样被放置在output.publicPath目录下，并通过output.publicPath + fileName的形式被使用
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  //postcss的插件配置
  postcss: function (webpack) {
    //postccImport -> precss -> autoprefixer
    return [
      //@import的样式也同样能被作为模块，发生变化时webpack会重新编译文件
      postcssImport({
        addDependencyTo: webpack
      }),
      //为css增加类似Sass的编程式语法
      precss,
      //添加有用的prefixer使得样式有更好的兼容性
      autoprefixer
    ];
  },
  devtool: 'source-map'
}