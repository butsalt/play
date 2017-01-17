fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('es6-babel'),
    //base目录是release的目录
    packTo: '/pkg/aio.js'
});