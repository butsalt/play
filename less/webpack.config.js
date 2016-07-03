module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders:
        [
            {
                test: /\.less$/,
                loader: 'style!css?sourceMap!less?sourceMap'
            }
        ]
    },
    devtool: "inline-source-map"
};