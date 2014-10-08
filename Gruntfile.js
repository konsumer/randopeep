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
			},
			'lite-browser': {
				'options':{
					'main':'index.js',
					'out': 'index.js',
					'dataLocation': 'http://konsumer.github.io/randopeep/data/' // lite version, that gets data for browser, with synchronous AJAX
				},
				'cwd': './data-src/',
				'dest': './data/'
			},
			'lite-node': {
				'options':{
					'main':'index.js',
					'out': 'index.js',
					'dataLocation': __dirname + '/data/' // lite version, that gets data for node, with dynamic require
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

		'connect': {
			'server': {
				'options': {
					'port': 8000,
					'base': 'test',
					'keepalive':true
				}
			}
		},

		'clean': {
			'default': ['out','data','test/randopeep.js', 'test/randopeep.min.js', 'test/data'],
		},

		'gh-pages': {
			'options': {
				'base': 'test'
			},
			'src': ['**']
		},

		'copy': {
			'default': {
				'files': [
					{'cwd':'out', 'expand': true, 'src': ['*.js'], 'dest': 'test/', 'filter': 'isFile'}
				]
			}
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
			if (!options.dataLocation){
				files.forEach(function(file){
					out += 'randopeep.data["' + file.replace(outDir,'').replace('.json','') + '"]=require("'+file+'");\n';
				});
			}else{
				out += 'randopeep.dataLocation=' + JSON.stringify(options.dataLocation) + ';\n';
			}
			grunt.file.write(options.out, out + '//</data>\n');
		});
	});


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-release');

	grunt.registerTask('default', ['clean:default', 'wordlists:default', 'browserify:default', 'uglify:default', 'copy:default']);
	grunt.registerTask('lite-browser', ['clean:default', 'wordlists:lite-browser', 'browserify:default', 'uglify:default']);
	grunt.registerTask('lite-node', ['clean:default', 'wordlists:lite-node', 'browserify:default', 'uglify:default']);
	grunt.registerTask('server', ['connect']);
	grunt.registerTask('npm', ['default', 'gh-pages', 'release']);

};