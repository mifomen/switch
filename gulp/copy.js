var gulp = require('gulp');

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    // "src/js/**",
    "src/*.html"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});
