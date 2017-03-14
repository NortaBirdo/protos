"use strict";

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var watch = require('gulp-watch');
var ejs = require('gulp-ejs');


gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
    gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./build/css'))
});

gulp.task('img', function () {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./build/img'))
});


gulp.task('html-example', function() {
  gulp.src('./src/*.ejs')
    .pipe(ejs())
    .pipe(gulp.dest('./build/'))
});

/*gulp.task('html-example', function () {
    gulp.src('./examples/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build-examples/'))
});*/

gulp.task('css-example', function () {
    gulp.src('./examples/css/*.css')
        .pipe(gulp.dest('./build-examples/css'))
});

gulp.task('img-example', function () {
    gulp.src('./examples/img/*.*')
        .pipe(gulp.dest('./build-examples/img'))
});

gulp.task('watch', function() {
  watch('./src/**/*.html', function(event, cb) {
    gulp.start('html');
  });
  watch('./src/css/*.css', function(event, cb) {
    gulp.start('css');
  });
  watch('./src/img/*.*', function(event, cb) {
    gulp.start('img');
  });
  watch('./examples/**/*.html', function(event, cb) {
    gulp.start('html-example');
  });
  watch('./src/examples/*.css', function(event, cb) {
    gulp.start('css-example');
  });
  watch('./src/examples/*.*', function(event, cb) {
    gulp.start('img-example');
  });
});

gulp.task('default', ['html', 'css', 'watch', 'img', 'html-example', 'css-example', 'img-example']);
