var glob = require('glob');

// 如果没有配置matchBase为true，*用来匹配0个到多个 文件夹名/文件名 的字符
var files = glob.sync('*.js');

console.log(files);

// 如果配置matchBase为true，在字符串内没有/的场合，传入字符串只用来匹配最终的 文件夹名/文件名
files = glob.sync('*.js', {
    matchBase: true
});

console.log(files);