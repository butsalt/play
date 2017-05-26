require('./lib/init');
const swig = require('swig');

let compileFunc = swig.compile(`
  {% test ("1") %}
    123
  {% endtest %}
`);
console.log(compileFunc({}));