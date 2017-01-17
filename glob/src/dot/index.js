var glob = require('glob');

var files = glob.sync('files/*js');
console.log(files);

files = glob.sync('files/*js', {
    // 匹配时，将'.'认为只是一般字符
    dot: true
});
console.log(files);

//'.'开头的 文件夹名/文件名 除非通过option设置否则只能也以'.'作为 文件夹名/文件名 匹配的开头才能匹配到
files = glob.sync('files/.js');
console.log(files);