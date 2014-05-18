var gulp = require('gulp'),
  connect = require('gulp-connect');



var fileTowatch = ["index.html"] ;

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(fileTowatch)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(fileTowatch, ['html']);
});

gulp.task('default', ['connect', 'watch']);