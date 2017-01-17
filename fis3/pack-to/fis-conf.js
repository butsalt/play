fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('es6-babel'),
    // packTo相当于定义了打包后的源文件的位置及文件名
    packTo: '/pkg/aio.js'
});