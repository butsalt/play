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
                        //当无法抽取时使用
                        'style',
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