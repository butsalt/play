fis.match('*.es6', {
  rExt: '.js',
  parser: fis.plugin('es6-babel'),
  // packTo的功能是由fis3内置的fis3-packager-map实现的
  // packTo相当于定义了打包后的源文件的位置及文件名
  packTo: '/pkg/aio.js'
});