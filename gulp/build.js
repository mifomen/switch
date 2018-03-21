var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");

gulp.task("build", function(evt) {
  run(
    "clean",
    "copy",
    "sass",
    "minjs",
    // "images",
    // "symbols",
    evt
  );
});