let co = require('co');

function getName () {
    return new Promise(function (resolve) {
        resolve('butSalt');
    });
}

co(
    function *() {
        let name = yield getName();
        return 'Hi, ' + name;
    }
)
    .then(function (res) {
        console.log(res);
    });