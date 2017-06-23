var $ = require('jquery');

// 异步加载
require.async(['./person'], function (p) {
  $('#J-p').text(p.name);
});