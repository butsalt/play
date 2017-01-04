var glob = require('glob');
// 文件名必须是其中之一
// a.js
// b.js
// c.js
var files = glob.sync('files/one/@(a|b|c).js');

console.log(files);