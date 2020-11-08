'use strict';

const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

var theme_name = 'echo';
var dist_dir = '_theme/blog_static/';


// sass
gulp.task('sass', function () {
  return gulp.src('_scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(dist_dir + 'css/'));
});
gulp.task('sassmin', function () {
  return gulp.src('_scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dist_dir + 'css/'));
});


// js task here -----------------


gulp.task('default', function() {
  gulp.watch( '_scss/**/*.scss', gulp.series( 'sass', 'sassmin' ) );
});

