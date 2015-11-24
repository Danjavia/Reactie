# Reactie

Starter kit for ReactJS & RoutieJS

Installation

- npm install
- bower install
- run gulp

Open [http://localhost:8080](http://localhost:8080)

### Set a custom domain

	gulp.task( 'webserver', function() {
	  	connect.server({
	  		livereload: true,
	  		// port: 80,
	  		// host: ''
	  	});
	});

- Uncomment Port and host lines, In the host line set your **example.dev**
- After set the same domain name in your hosts file
- run gulp
- Access to [http://example.dev](http://example.dev)
- Start to hack!
