// 支持用commonjs的语法解析文件对其他文件的依赖请求
// 并对isMod为true，isJsLike为true的文件进行wrapper
fis.hook('commonjs', {
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/node_modules/(**.js)', {
    // npm模块需要wrapper
    isMod: true,
    useSameNameRequire: true,
    release: '/static/lib/$1'
});

fis.match('/lib/**.js', {
    release: '/static/$0'
});

// 不使用默认的fis component来解析资源请求
fis.unhook('components');

// 通过npm查找component
fis.hook('node_modules', {
    // 避免在npm模块内做process的shim
    shimProcess: false
});

// 根据模块依赖关系正确处理html文件
fis.match('::package', {
    postpackager: fis.plugin(
        'loader',
        {
            resourceType: 'commonJs',
            useInlineMap: true
        }
    )
});