# Learning [gulp.js](https://gulpjs.com/)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

`gulp` -> `gulpfile.js` -> Run tasks like [transpilation](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles). Write in JavaScript.

<https://gulpjs.com/docs/en/getting-started/quick-start>

Gulp vs Grunt vs Webpack: <https://da-14.com/blog/gulp-vs-grunt-vs-webpack-comparison-build-tools-task-runners>

## Startup using this repo

```bash
git clone https://github.com/hchiam/learning-gulp.git
npm install
```

and then `gulp` or specific gulp tasks like `gulp css` or `gulp js` specified in gulpfile.js

## Startup CLI commands for a project from scratch

Once for your computer:

```bash
npm install gulp-cli -g
```

Per project:

```bash
mkdir my-project-folder-name
npm install gulp -D
npx -p touch nodetouch gulpfile.js
```

## Test `gulpfile.js`

Fill `gulpfile.js` and then run:

```bash
gulp
```

BTW: You can run multiple tasks like this: `gulp <task> <other-task>`

## More notes

```js
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
```
