fis.hook('commonjs');

// fis3中
// /lib/**/*.js 只能匹配lib目录的子目录及子目录的后代目录下的所有js文件，lib目录下的文件不匹配
// /lib/*.js 只能匹配lib目录下的所有js文件
// /lib/**.js 能匹配lib目录及其后代目录下的所有js文件
fis.match('/lib/**.js', {
    release: '/static/$0'
});

fis.match('/comp/**.js', {
    // 声明该文件是模块，这样才会被fis-postpackager-loader封装成可以被mod.js识别的模块
    isMod: true,
    release: '/static/$0'
});

fis.match('/lib/jquery/2.1.3/jquery.js', {
    id: 'jquery',
    isMod: true
});

fis.match(
    '::package',
    {
        postpackager: fis.plugin(
            'loader',
            {
                resourceType: 'commonJs',
                useInlineMap: true
            }
        )
    }
);