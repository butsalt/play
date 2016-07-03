//加载基本样式
require('./base.css');

var $ = require('jquery');

$(function () {
    var $target = $('#target');

    $('<i class="smile-ico">')
        .appendTo($target);

    $('<span>')
        .text('It works!')
        .appendTo($target);;
});