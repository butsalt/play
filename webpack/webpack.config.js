var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    // 如果name下指定的module是字符串，则这个module的id为0，并被chunk返回
    // 如果name下指定的module是数组，则会生成一个id为0的module，依次加载数组中的所有module，最后一个module会被chunk返回
    page1: './src/page1.js',
    page2: './src/page2.js',
    vendor: ['./src/util.js']
  },
  output: {
    // 指定用于异步加载时的文件夹路径
    publicPath: '/dist/',
    // 编译后的目标目录
    path: './dist',
    //entry chunk的文件名
    filename: '[name].entry.chunk.js',
    // 由于异步加载生成的chunk的文件名
    // 当前output.filename的配置下，output.chunkFilename默认配置是[id].[name].entry.chunk.js
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new CommonsChunkPlugin({
      // 按name依次执行，其余配置相同
      names: ['page1', 'page2'],
      // 选择name指定的chunk下的所有child chunk作为chunks
      children: true,
      // 为真值时，
      // 提取出来的公共module作为name指定的chunk下的child chunk，当chunk加载时如果有需要就异步加载这个common chunk
      async: true,
      // 默认为name指定的chunk下拥有的child chunk的数量
      minChunks: 2
    }),
    new CommonsChunkPlugin({
      // 这个name未在entry中出现过，于是相当于创建了一个新的entry chunk
      name: 'commons',
      filename: '[name].chunk.js',
      // 应该被提取公共部分的chunk，默认是所有还未作为chunks经CommonsChunkPlugin处理过的entry chunk
      // 注意，这些chunk下不该有async chunk
      chunks: ['page1' ,'page2'],
      // 只有当一个module在chunks中至少有minChunks个chunk使用了这个module才会被放入公共chunk中
      // 默认为chunks的length
      minChunks: 2
    }),
    new CommonsChunkPlugin({
      // 这个name在entry中出现过，相当于声明这个chunk是公共的，chunks中所选的chunk不会再包含公共chunk中的module
      // chunks中如果包含runtime，都会被移到common chunk中
      name: 'vendor',
      filename: '[name].chunk.js',
      // Infinity可以防止其他存在于chunks中的chunk中的module由于满足minchunk的条件被合并到公共chunk
      minChunks: Infinity
    })
  ]
};