'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// clean: [
		// 	'public/*.*',
		// 	'!public/index.html'
		// ],
		jst: {
			compile: {
				files: {
					'public/templates.js': ['app/templates/*.jst']
				}
			}
		},
		concat: {
			assetsLibs: {
				src: [
					'assets/js/jquery.min.js',
					'assets/js/underscore-min.js',
					'assets/js/backbone-min.js',
					'assets/js/bootstrap.min.js'
				],
				dest: 'public/assets-libs.js'
			},
			assetsCss: {
				src: [
					'assets/css/bootstrap.min.css'
				],
				dest: 'public/assets-styles.css'
			},
			backboneModels: {
				src: ['app/models/*.js'],
				dest: 'public/bb-models.js'
			},
			backboneCollections: {
				src: ['app/collections/*.js'],
				dest: 'public/bb-collections.js'
			},
			backboneViews: {
				src: ['app/views/*.js'],
				dest: 'public/bb-views.js'
			},
			backboneRouter: {
				src: ['app/router/*.js'],
				dest: 'public/bb-router.js'
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'public',
					keepalive: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['jst', 'concat', 'connect']);
};