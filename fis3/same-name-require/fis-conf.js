fis.match('*.{html,js}', {
    useSameNameRequire: true
});

// 同文件夹下html会增加对同名js，css的依赖
// 同文件夹下js会增将对同名css的依赖
fis.match('*.html', {
    useMap: true
});