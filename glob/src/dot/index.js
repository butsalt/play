var glob = require('glob');

var files = glob.sync('files/*js');
console.log(files);

files = glob.sync('files/*js', {
    dot: true
});
console.log(files);

//'.'开头的文件名除非通过option设置否则只能也以'.'作为文件名匹配的开头才能匹配到
files = glob.sync('files/.js');
console.log(files);