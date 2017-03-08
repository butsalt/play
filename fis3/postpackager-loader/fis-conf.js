// 与packTo相比较，fis3-postpacker-loader可以针对每个页面的资源做打包
fis.match('::packager', {
    postpackager: fis.plugin('loader', {
       allInOne: true
    })
});