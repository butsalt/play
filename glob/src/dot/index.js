var glob = require('glob');

var files = glob.sync('files/*js');
console.log(files);

files = glob.sync('files/*js', {
  // **匹配，*匹配时，将以'.'开头的 文件夹/文件名 同样纳入匹配范围
  dot: true
});
console.log(files);

//'.'开头的 文件夹名/文件名 除非通过option设置否则只能也以'.'作为 文件夹名/文件名 匹配的开头才能匹配到
files = glob.sync('files/.js');
console.log(files);