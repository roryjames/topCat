var gulp = require('gulp');
var nodesass = require('node-sass');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./assets/styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('js', function() {
    gulp.src('./assets/js/*.js')
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/styles/sass/*.scss', ['sass']);
});

gulp.task('js:watch', function() {
    gulp.watch('./assets/js/*.js', ['sass']);
});