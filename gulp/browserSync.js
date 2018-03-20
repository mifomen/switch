var gulp = require('gulp');
var browserSync = require('browser-sync').create(); 


gulp.task("html", function() {
  gulp.src("src/*.html")
    .pipe(gulp.dest("./build"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  // gulp.watch("sources/**/*.{sass", scss}, ["minjs"]);
  // gulp.watch("sources/**/*.js", ["html"]);
  // gulp.watch("sources/**/*.html", ["sass"]);

 // gulp.watch("sources/**/*.js", ["minjs"]).on("change", browserSync.reload);
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});