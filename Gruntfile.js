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
				'cwd': './data-src/',
				'dest': './data/'
			}
		},
		
		'browserify': {
			'default': {
				'files': {'out/<%= pkg.name %>.js': 'index.js'}
			}
		},

		'uglify': {
			'options': {
				'banner': '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			'default': {
				'src': 'out/<%= pkg.name %>.js',
				'dest': 'out/<%= pkg.name %>.min.js'
			}
		},

		'clean': {
			'default': ['out','data'],
		}
	});

	// Generate JS wordlist data
	// TODO: this should probably be more grunt-ee
	var wl = require('./wordlists.js');
	grunt.registerMultiTask('wordlists', function() {
		var options = this.options();
		var outDir = this.data.dest;

		var out = grunt.file.read(options.main).replace(/\n\/\/<data>(.|\n)+\/\/<\/data>/, '') + '\n//<data>\n';

		wl(this.data.cwd, this.data.dest, function(files){
			files.forEach(function(file){
				out += 'randopeep.data["' + file.replace(outDir,'').replace('.json','') + '"]=require("'+file+'");\n';
			});
			grunt.file.write(options.out, out + '//</data>');
		});
	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean:default', 'wordlists', 'browserify', 'uglify']);
};