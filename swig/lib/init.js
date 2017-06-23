const swig = require('swig');
const tags = ['test'];

tags
  .forEach(function (tagName) {
    const tag = require(`./tags/${tagName}`);
    swig.setTag(
      tagName,
      tag.parse,
      tag.compile,
      tag.ends,
      tag.blockLevel || false
    );
  });