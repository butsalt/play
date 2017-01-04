var glob = require('glob');

// ** 可以匹配0个到多个子目录
var files = glob.sync('files/**/*.js');

console.log(files);