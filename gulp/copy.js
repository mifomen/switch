var gulp = require('gulp');
var rename = require("gulp-rename");
var csso = require('gulp-csso'); 
// var run = require("run-sequence");

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**"
    // "src/js/**",
    // "src/*.html"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("bp-grid-css", function() {
  return gulp.src("src/**/bootstrap-grid.css")
  .pipe(csso())
  .pipe(rename('bootstrap-grid.min.css'))
  .pipe(gulp.dest("./build/css"));
});