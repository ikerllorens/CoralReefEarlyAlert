/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function () {
    return gulp.src('app/**/*.js');
});

gulp.task('scripts', function() {
    return gulp.src('app/**/*.js')
        //.pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/app'));
});

