var gulp = require("gulp");
var htmlbeautify = require("gulp-html-beautify");
var markdown = require("gulp-breakdance");
var rename = require("gulp-rename");

gulp.task("normal", () => {
  gulp
    .src("./in/*.html")
    .pipe(
      htmlbeautify({
        preserve_newlines: false
      })
    )
    .pipe(gulp.dest("./docs/html/"));
});
gulp.task("tomd", () => {
  gulp
    .src("./docs/html/*.html")
    .pipe(markdown({
        domain: "http://tonbi.jp/Game/RPGMakerMV/"
    }))
    .pipe(rename({ extname: ".md" }))
    .pipe(gulp.dest("./docs/"));
});
