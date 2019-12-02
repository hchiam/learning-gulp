const { watch, series, parallel } = require('gulp');

function clean(cb) { cb(); }
function cssTranspile(cb) { cb(); }
function cssMinify(cb) { cb(); }
function jsTranspile(cb) { cb(); }
function jsBundle(cb) { cb(); }
function jsMinify(cb) { cb(); }
function publish(cb) { cb(); }

// watch = watch for file changes ; series = in order ; parallel = maximize concurrency
exports.build = function() {
  watch('src/*.js',
    series(
      clean,
      parallel(
        cssTranspile,
        series(jsTranspile, jsBundle)
      ),
      parallel(cssMinify, jsMinify),
      publish
    )
  );
}

// function transpile(cb) { cb(); }
// function minify(cb) { cb(); }
// function livereload(cb) { cb(); }

// if (process.env.NODE_ENV === 'production') {
//   exports.build = series(transpile, minify);
// } else {
//   exports.build = series(transpile, livereload);
// }
