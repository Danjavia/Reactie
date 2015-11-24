var gulp = require( 'gulp' ),
	connect = require('gulp-connect'),
	minifyCss = require( 'gulp-minify-css' ),
	less = require( 'gulp-less' );

gulp.task( 'webserver', function() {
  	connect.server({
  		livereload: true,
  		// port: 80,
  		// host: ''
  	});
});

gulp.task( 'less', function () {
	return gulp.src( './assets/less/*.less' )
		.pipe( less() )
		.pipe( minifyCss() )
		.pipe( gulp.dest( './assets/css' ) )
    	.pipe( connect.reload() );
});

gulp.task( 'minify', function() {
	return gulp.src( './assets/css/*.css' )
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe( gulp.dest( './assets/css/' ));
});

gulp.task( 'watch', function() {
    gulp.watch( './assets/less/*/*.less', [ 'less' ]);
})

gulp.task( 'default', [ 'less', 'webserver', 'watch' ]);