module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        publicPath: '/dist/',
        path: './dist',
        filename: '[name].entry.chunk.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};