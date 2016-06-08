var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('prueba', function(){
	console.log('Esta es una prueba');
});

gulp.task('css', function(){
	gulp
		.src('styles.less')
		.pipe(less())
		.pipe(cleanCSS())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
});

gulp.task('bootstrap', function(){
	gulp
		.src('./node_modules/bootstrap/dist/css/bootstrap.css')
		.pipe(cleanCSS())
		.pipe(rename('bootstrap.min.css'))
		.pipe(gulp.dest('public'));

	console.log('Bootstrap has been moved')
});

gulp.task('default', ['prueba', 'css', 'bootstrap']);