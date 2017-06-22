let co = require('co');

function getName() {
  return new Promise(function(resolve) {
    resolve('butSalt');
  });
}

co(
  // 用generator创建一个iterator
  function *generator() {
    // let thenable = iterator.next();
    // getName函数返回的thenable对象被作为此次yield的结果
    // thenable对象被决议后iterator才被继续调用
    let name = yield getName();
    return 'Hi, ' + name;
  }
)
  .then(function(res) {
    console.log(res);
  });