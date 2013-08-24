'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		'pkg': grunt.file.readJSON('package.json'),
		'wordlists': {
			'default': {
				'options':{
					'main':'src/index.js',
					'out': 'build/tmp.js',
				},
				'src':  ['**/*.txt'],
				'cwd': 'data/',
				'dest': 'data_js/',
				'ext': '.js',
				'expand': true,
			}
		},
		
		'globalwrap': {
			'default': {
				'main': 'build/tmp.js',
				'global': '<%= pkg.name %>',
				'dest': 'build/<%= pkg.name %>.js',
				'bundleOptions': { debug: true }
			}
		},

		'uglify': {
			'options': {
				'banner': '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			'default': {
				'src': 'build/<%= pkg.name %>.js',
				'dest': 'build/<%= pkg.name %>.min.js'
			}
		},

		'clean': {
			'default': ['build','data_js'],
			'tmp': 'build/tmp.js'
		}
	});

	// Generate JS wordlist data
	grunt.registerMultiTask('wordlists', function() {
		var out=[];
		this.files.forEach(function(file) {
			file.src.forEach(function(dataFile){
				grunt.file.write(file.dest , 'module.exports = ' + JSON.stringify(grunt.file.read(dataFile).split('\n')) + ';');
				out.push(file.dest);
			});
		});

		var options = this.options({});

		if (options.main && options.out){
			var t = grunt.file.read(options.main) + "\n// For browserify: pre-cache data-requires\n";
			out.forEach(function(o){
				t += "require('../" + o + "');\n"
			});
			grunt.file.write(options.out, t);
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-global-wrap");
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean:default', 'wordlists', 'globalwrap', 'clean:tmp', 'uglify']);
};