var webpack = require('webpack');

var config = require('./webpack.base.config');


config.output.filename = 'entry.[hash].js';
if (!config.plugins) {
    config.plugins = [];
}
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(
        {
            compress: {
                warnings: false
            }
        }
    )
);

module.exports = config;