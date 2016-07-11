/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var del = require('del');


gulp.task('lint', function () {
    return gulp.src('**/*.js');
});

gulp.task('scripts', function () {
    return gulp.src(['**/*.js', '!node_modules/**/*'])
            //.pipe(rename('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});

gulp.task('html', function () {
    return gulp.src(['**/*.html', '!node_modules/**/*'])
           // .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('build'));
});

gulp.task('images', function() {
  return gulp.src('img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('icon', function() {
  return gulp.src('**/*.ico')
    .pipe(gulp.dest('build/img'));
});

gulp.task('php', function() {
  return gulp.src('php/**/*.php')
    .pipe(gulp.dest('build/php'));
});

gulp.task('json', function() {
    return gulp.src('package.json')
            .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('css', function() {
    return gulp.src(['**/*.css', '!node_modules/**/*'])
            .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('scripts', 'html', 'images', 'json', 'css', 'icon', 'php');
});

gulp.task('scripts-size', function () {
    return gulp.src(['**/*.js', '!node_modules/**/*'])
            //.pipe(rename('all.min.js'))
            .pipe(concat('tss.js'))
            .pipe(gulp.dest('control'));
});