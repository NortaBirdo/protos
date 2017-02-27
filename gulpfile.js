"use strict";

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var watch = require('gulp-watch');

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
    gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./build/css'))
});

gulp.task('watch', function() {
  watch('./src/**/*.html', function(event, cb) {
    gulp.start('html');
  });
  watch('./src/css/*.css', function(event, cb) {
    gulp.start('css');
  });
});

gulp.task('default', ['html', 'css', 'watch']);
