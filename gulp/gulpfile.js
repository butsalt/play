var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');

var webpack = require('webpack');

var fs = require('fs');
var Handlebars = require('handlebars');;

function printWebpackStats (stats) {
  gutil.log('[webpack:build]');
  console.log(stats.toString({
    version: false,
    hash: false,
    timings: false,
    colors: true
  }));
}

var finish;
function generateHomePage (err, stats) {
  if (err) {
    throw new gutil.PluginError('build', err);
  }
  printWebpackStats(stats);

  var chunkFileNameMap = stats.toJson().assetsByChunkName;

  var tplSource = fs.readFileSync('./src/index.tpl', {
    encoding: 'UTF-8'
  });
  var tpl = Handlebars.compile(tplSource);
  var html = tpl(chunkFileNameMap);

  fs.writeFileSync('./dist/index.html', html);
  if (finish) {
    finish();
    finish = null;
  }
}

gulp.task('clean', function () {
  return del(['./dist/**/*']);
});

var compiler;
gulp.task('dev', ['clean'], function (cb) {
  finish = cb;
  var compiler = webpack(require('./build/webpack.dev.config'), generateHomePage);

  gulp.task('rebuild', function (finish) {
    compiler.run(function (err, stats) {
      if(err) {
        throw new gutil.PluginError('rebuild', err);
      }
      printWebpackStats(stats);
      finish();
    });
  });

  gulp.watch(['./src/**/*'], ['rebuild']);
});

gulp.task('prod', ['clean'],function (cb) {
  finish = cb;
  webpack(require('./build/webpack.prod.config'), generateHomePage);
});