// fis3会根据编译后的扩展名尝试判断是哪种like
// js, es6, jsx, coffee都是isJsLike
fis.match('*.ts', {
    // 只有满足fis要求的扩展名才会执行compile，只有执行compile才能使内置语法生效
    // fis3/lib/util TEXT_FILE_EXTS
    // fis3/lib/util IMAGE_FILE_EXTS
    isJsLike: true
});