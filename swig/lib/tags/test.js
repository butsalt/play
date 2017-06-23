exports.compile = function (compiler, args, content, parents, options, blockName) { 
  console.log(args);
  let output = `_output += '<content>';`;
  output += compiler(content, parents, options, blockName);
  output += `_output += '</content>';`;
  return output;
};

exports.parse = function (str, line, parser, types) {
  parser.on(
    types.STRING,
    function (token) {
      // 如果返回一个真值，则parseToken函数仍会对token进行加工，并将结果push到this.out中
      return true;
    }
  );

  return true;
};

exports.ends = true;