var gulp = require('gulp'),
	jade = require('gulp-jade'),
	connect = require('gulp-connect');

gulp.task('index', function() {
	
	var LOCALS = { pageTitle:'Jade Template', activeLink:'h1' };
	
	return gulp.src('./app/index.jade')
		.pipe(jade({
			pretty: true,
			locals: LOCALS
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('serve', function() {
	connect.server({
		root: './dist',
		livereload: true,
		port: 3000
	});
});

gulp.task('watch', function() {
	gulp.watch('./app/**/*.jade', ['index']);
	//gulp.watch('./app/**/*.scss',['css']);
	//gulp.watch('./app/**/*.js',['js']);
});

gulp.task('default', ['index', 'serve', 'watch']);