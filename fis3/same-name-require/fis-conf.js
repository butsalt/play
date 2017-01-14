// 同文件夹下html会增加对同名js，css的依赖
// 同文件夹下js会增将对同名css的依赖
fis.match('*.{html,js}', {
    useSameNameRequire: true
});

// 默认情况下html对其他资源的依赖是不会输出到resource_map的，所以要特别声明
fis.match('*.html', {
    useMap: true
});