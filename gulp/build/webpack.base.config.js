module.exports = {
    entry: './src/app/index.js',
    output: {
        path: './dist/assets',
        publicPath: './assets/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    name: 'img/[hash].[ext]',
                    limit: 10000
                }
            }
        ]
    }
};