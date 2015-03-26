"use-strict";
var module = module || '';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [ 'app/*.js', 'tmp/*.js', 'app/theme-switcher/*.js', 'app/video-games/**/*.js' ],
				dest: 'dist/app.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/app.js': [ 'dist/app.js' ]
				},
				options: {
					mangle: true
				}
			}
		},

		clean: {
			temp: {
				src: [ 'tmp' ]
			},
			dist: {
				src: [ 'dist' ]
			}
		},

		copy: {
			main: {
				files: [
					{expand: true, cwd: 'app/', src: ['css/**/*.css', '!bower_components/**/*.css'], dest: 'dist/'},
					{expand: true, cwd: 'app/', src: ['**/*.html', '!bower_components/**/*.html', '!index.html'], dest: 'dist/'},
					{expand: true, cwd: 'app/', src: ['video-games.json'], dest: 'dist/'},
					{expand: true, cwd: 'app/', src: ['pics/*.png'], dest: 'dist/'},
					{expand: true, cwd: 'app/', src: ['bower_components/html5-boilerplate/css/*.css', 'bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js'], dest: 'dist/'}
				]
			}
		},

		processhtml: {
			options: {
				data: {
					message: 'Hello world!'
				}
			},
			dist: {
				files: {
					'dist/index.html': ['app/index.html']
				}
			}
		}

	}); // initConfig

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('package', ['clean:dist', 'concat:dist', 'uglify:dist', 'clean:temp', 'copy', 'processhtml' ]);
	grunt.registerTask("default", ['clean:dist', 'concat:dist', 'uglify:dist', 'clean:temp', 'copy', 'processhtml' ]);
};