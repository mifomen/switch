var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("minjs", function() {
  gulp.src("src/js/script.js")
    .pipe(uglify())
    .pipe(rename('min.js'))
    .pipe(gulp.dest("build/js"));
});