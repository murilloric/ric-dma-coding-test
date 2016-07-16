var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('concat-client', function() {
  return gulp.src(['./clientlibs/js/app.js', './clientlibs/js/services.js', './clientlibs/js/controller.js', './clientlibs/js/filters.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./clientlibs/concat/'));
});


gulp.task('min-js-client', function() {
	return gulp.src('clientlibs/concat/app.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('clientlibs/min/'));
});



gulp.task('default', ['concat-client', 'min-js-client']);