var config = require('./webpack.base.config');

config.output.filename = 'entry.js';

config.devtool = 'eval-source-map';

module.exports = config;