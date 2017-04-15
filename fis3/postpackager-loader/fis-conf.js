// packTo可用来将几个文件在产出时打包成一个，由内置的fis3-packager-map实现
// fis3-postpacker-loader会根据isHtmlLike文件对其他文件的依赖情况，根据配置对此文件进行加工
fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    // 依赖的文件将被打包成一个文件再产出
    // pack文件将会在html对应的产出文件内被正确加载
    allInOne: true
  })
});