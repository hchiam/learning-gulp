var gulp = require('gulp')
var request = require('request')
var source = require('vinyl-source-stream')
var concat = require('gulp-concat')

function css() {
  return request('https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css')
    .pipe(source('water.css'))
    .pipe(gulp.dest('dist'))
}

function js() {
  return gulp.src('src/*.js')
    .pipe(concat('combined.js'))
    // .pipe(minify())
    .pipe(gulp.dest('dist'))
}

gulp.task('css', css) // CLI command: gulp css
gulp.task('js', js) // CLI command: gulp js

function defaultTask() {
  // place code for your default task here
  // return css()
  // return js()
  return gulp.series(css, js)
}

exports.default = defaultTask() // CLI command: gulp
