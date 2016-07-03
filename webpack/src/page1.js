var moki = require('./person/moki');
console.log(moki.name);

require(['./person/butsalt'], function (butsalt) {
    console.log(butsalt);
});

require(['./person/butsalt', './person/krista'], function (butsalt, krista) {
    console.log(butsalt);
});