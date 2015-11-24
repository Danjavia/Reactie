# Reactie

Starter kit for ReactJS & RoutieJS

### This pack include

- Babel browser
- live reload
- [ReactJs](https://facebook.github.io/react/) & [RoutieJS](http://projects.jga.me/routie/) of course :)
- [Bootstrap v4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/)
- [Font Awesome v4.5.0](https://fortawesome.github.io/Font-Awesome/)

### Installation

- npm install
- bower install
- run gulp

Open [http://localhost:8080](http://localhost:8080)

---------------------------------------------------

### Set a custom domain

- Open the gulpfile.js file in the root folder
	
	```
	// gulpfile.js
	gulp.task( 'webserver', function() {
	  	connect.server({
	  		livereload: true,
	  		// port: 80,
	  		// host: ''
	  	});
	});
	```

- Uncomment Port and host lines
- In the host line set your **example.dev**
- After set the same domain name in your hosts file
- run gulp
- Access to [http://example.dev](http://example.dev)
- Start to hack!
