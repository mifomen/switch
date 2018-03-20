var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var rename = require("gulp-rename");


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
  .pipe(plumber())
  .pipe(sass())
   // .pipe(rename(style.css))
  .pipe(gulp.dest('build/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});