"use strict";

var path = {
  from: {
    protos: {
      css: './css/*.css'
    },
    src: {
      html: './src/*.html',
      css: './src/css/*.css',
      img: './src/img/*.*',
      js: './src/js/*.*'
    },
    examples: {
      html: './examples/*.html',
      css: './examples/css/*.css',
      img: './examples/img/*.*',
      js: './npm /js/*.*'
    }
  },
  dest: {
    protos_build: {
      css: './build/css'
    },
    protos_examples: {
      css: './examples/css'
    },
    src: {
      html: './build/',
      css: './build/css',
      img: './build/img',
      js: './build/js'
    },
    examples: {
      html: './build-examples/',
      css: './build-examples/css',
      img: './build-examples/img',
      js:'./build-examples/js'
    },

  }
}

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var watch = require('gulp-watch');

gulp.task('html', function () {
    gulp.src(path.from.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.dest.src.html))
});

gulp.task('css', function () {
    gulp.src(path.from.src.css)
        .pipe(gulp.dest(path.dest.src.css))
});

gulp.task('img', function () {
    gulp.src(path.from.src.img)
        .pipe(gulp.dest(path.dest.src.img))
});

gulp.task('js', function () {
    gulp.src(path.from.src.js)
        .pipe(gulp.dest(path.dest.src.js))
});

gulp.task('html-example', function () {
    gulp.src(path.from.examples.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.dest.examples.html))
});

gulp.task('css-example', function () {
    gulp.src(path.from.examples.css)
        .pipe(gulp.dest(path.dest.examples.css))
});

gulp.task('img-example', function () {
    gulp.src(path.from.examples.img)
        .pipe(gulp.dest(path.dest.examples.img))
});

gulp.task('js-example', function () {
    gulp.src(path.from.examples.js)
        .pipe(gulp.dest(path.from.examples.js))
});

gulp.task('protos', function () {
    gulp.src(path.from.protos.css)
        .pipe(gulp.dest(path.dest.examples.protos_build.css))
});

gulp.task('protos-example', function () {
    gulp.src(path.from.protos.css)
        .pipe(gulp.dest(path.dest.examples.protos_examples.css))
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
  });
  watch('./css/*.css', function(event, cb) {
    gulp.start('protos-example');
  });
});

gulp.task('default', ['watch', 'html', 'css', 'js', 'img', 'html-example', 'css-example', 'img-example', 'js-example', 'protos', 'protos-example']);
