'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		'pkg': grunt.file.readJSON('package.json'),
		'wordlists': {
			'default': {
				'options':{
					'main':'index.js',
					'out': 'index.js',
				},
				'src':  ['**/*.txt'],
				'cwd': 'data/',
				'dest': 'data_js/',
				'ext': '.js',
				'expand': true,
			}
		},
		
		'browserify': {
			'default': {
				'files': {'build/<%= pkg.name %>.js': 'index.js'}
			}
		},

		'uglify': {
			'options': {
				'banner': '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			'default': {
				'src': 'build/<%= pkg.name %>.js',
				'dest': 'build/<%= pkg.name %>.min.js'
			}
		},

		'clean': {
			'default': ['build','data_js'],
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

		var dest = this.data.dest;
		var options = this.options({});
		if (options.main && options.out){
			var t = grunt.file.read(options.main).replace(/\n\/\/<browserify>(.|\n)+\/\/<\/browserify>/, '') + "\n//<browserify>\n";
			out.forEach(function(o){
				var n = o.replace(dest,'').replace('.js','');
				t += "module.exports.data['"+n+"'] = require('./" + o + "');\n";
			});
			grunt.file.write(options.out, t + "//</browserify>");
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean:default', 'wordlists', 'browserify', 'uglify']);
};