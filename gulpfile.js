"use strict";

var path = {
  examples: {
    html: './examples/*.html',
    css: './examples/css/*.css',
    img: './examples/img/*.*',
    js: './examples/js/*.*'
  },
  src: {
    html: './src/*.html',
    css: './src/css/*.css',
    img: './src/img/*.*',
    js: './src/js/*.*'
  },
  protos: {
    css: './css/*.css'
  }
}

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var watch = require('gulp-watch');

gulp.task('html', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
    gulp.src(path.src.css)
        .pipe(gulp.dest('./build/css'))
});

gulp.task('img', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest('./build/img'))
});

gulp.task('js', function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest('./build/js'))
});

gulp.task('html-example', function () {
    gulp.src(path.examples.html)
        .pipe(rigger())
        .pipe(gulp.dest('./build-examples/'))
});

gulp.task('css-example', function () {
    gulp.src(path.examples.css)
        .pipe(gulp.dest('./build-examples/css'))
});

gulp.task('img-example', function () {
    gulp.src(path.examples.img)
        .pipe(gulp.dest('./build-examples/img'))
});

gulp.task('js-example', function () {
    gulp.src(path.examples.js)
        .pipe(gulp.dest('./build-examples/js'))
});

gulp.task('protos', function () {
    gulp.src(path.protos.css)
        .pipe(gulp.dest('./build/css'))
});

gulp.task('protos-example', function () {
    gulp.src(path.protos.css)
        .pipe(gulp.dest('./examples/css'))
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
  watch('./src/js/*.*', function(event, cb) {
    gulp.start('js');
  });
  watch('./examples/**/*.html', function(event, cb) {
    gulp.start('html-example');
  });
  watch('./examples/*.css', function(event, cb) {
    gulp.start('css-example');
  });
  watch('./examples/img/*.*', function(event, cb) {
    gulp.start('img-example');
  });
  watch('./examples/js/*.*', function(event, cb) {
    gulp.start('js-example');
  });
  watch('./css/*.css', function(event, cb) {
    gulp.start('protos');
    gulp.start('protos-example');
  });
});

gulp.task('default', ['watch', 'html', 'css', 'js', 'img', 'html-example', 'css-example', 'img-example', 'js-example', 'protos']);
