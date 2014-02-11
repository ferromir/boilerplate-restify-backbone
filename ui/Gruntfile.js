'use strict';

module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['public/assets/*.*'],
		jst: {
			compile: {
				files: {
					'public/assets/templates.js': ['templates/*.jst']
				}
			}
		},
		concat: {
			libs: {
				src: [
					'assets/js/jquery.min.js',
					'assets/js/underscore-min.js',
					'assets/js/backbone-min.js',
					'assets/js/bootstrap.min.js',
					'assets/*.js'
				],
				dest: 'public/assets/libs.js'
			},
			css: {
				src: [
					'assets/css/bootstrap.min.css',
					'assets/css/bootstrap-theme.min.css',
					'assets/css/*.css'
				],
				dest: 'public/assets/styles.css'
			},
			app: {
				src: [
					'app/models/*.js',
					'app/collections/*.js',
					'app/views/*.js',
					'app/router/*.js'
				],
				dest: 'public/assets/app.js'
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'public'
				}
			}
		},
		watch: {
			all: {
				files: [
					'assets/**/*.*',
					'app/**/*.*',
					'templates/**/*.*'
				],
				tasks: [
					'clean',
					'jst',
					'concat'
				]
			}
		},
		uglify: {
			prod: {
				files: {
					'public/assets/templates.js': ['public/assets/templates.js'],
					'public/assets/libs.js': ['public/assets/libs.js'],
					'public/assets/app.js': ['public/assets/app.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
		'clean',
		'jst',
		'concat',
		'connect',
		'watch'
	]);

	grunt.registerTask('prod', [
		'clean',
		'jst',
		'concat',
		'uglify',
		'connect:server:keepalive'
	]);

};