/**
 * Generate JSON files for all data-sets from other-peoples data
 * // TODO: this should probably be more grunt-ee
 */

'use strict';

module.exports = function(inDir, outDir, mainCB){

	var mkdirp = require('mkdirp');
	var fs = require('fs');
	var path = require('path');
	var glob = require('glob');

	var xml = require('xml2js');

	// generic: open a wordlist file, and output javascript for all non-blank lines as array
	function wordlistToArray(file){
		return (fs.readFileSync(file) + '').replace(/\r/g,'').split('\n').filter(function(el){
			return el !== '';
		});
	}


	// parse wordlists
	function doWordLists(cb){
		glob(inDir + 'wordlists/**/*.txt', function(err,files){
			var nfiles = [];
			files.forEach(function(file,i){
				var f = file.replace(inDir + 'wordlists/','./data/').replace('.txt','.json');
				mkdirp.sync(path.dirname(f));
				fs.writeFileSync(f, JSON.stringify(wordlistToArray(file)));
				nfiles.push(f);
				if (i === (files.length-1)){ cb(nfiles); }
			});
		});
	}

	// these are specific to the data, which I wanted to keep in their native format

	// parse Faker data
	function doFaker(cb){
		var def = require(inDir + 'faker_definitions.js');

		def.name_prefix_female = def.prefix_female;
		def.name_prefix_male = def.prefix_male;
		delete def.prefix_female;
		delete def.prefix_male;
		def.catchPhrase_adjective = def['catch_phrase_adjective'];
		def.catchPhrase_descriptor = def['catch_phrase_descriptor'];
		def.catchPhrase_noun = def['catch_phrase_noun'];
		delete def.catch_phrase_adjective;
		delete def.catch_phrase_descriptor;
		delete def.catch_phrase_noun;
		def.phone =  def.phone_formats;
		delete def.phone_formats;
		def.ipsum_lorem = def.lorem;
		delete def.lorem;
		delete def.br_state_abbr;

		var nfiles = [];

		for (var n in def){
			var f = outDir + '' + n.replace(/_/g,'/') + '.json';
			mkdirp.sync(path.dirname(f));
			fs.writeFileSync(f, JSON.stringify(def[n]));
			nfiles.push(f);
		}
		cb(nfiles);
	}

	// parse NPC generator names
	function doNPCNames(cb){
		var nfiles = [];
		glob(inDir + 'npcgenerator/names-data/*.txt', function(err,files){
			files.forEach(function(file,i){
				var f = outDir + 'name/' + path.basename(file, '.txt').toLowerCase().replace(/-/g,'/') + '.json';
				mkdirp.sync(path.dirname(f));
				fs.writeFileSync(f, JSON.stringify(wordlistToArray(file)));

				nfiles.push(f);
				if (i === (files.length-1)){ cb(nfiles); }
			});
		});
	}

	function doInventions(cb){
		// parse invention-generator
		var def = require(inDir + 'invention.js');
		var nfiles = [];
		mkdirp.sync(outDir + 'invention');
		for (var n in def){
			var f = outDir + 'invention/' + n + '.json';
			fs.writeFileSync(f, JSON.stringify(def[n]));
			nfiles.push(f);
		}
		cb(nfiles);
	}


	/*
		// parse GURPS NPC generator class-data
		glob(inDir + 'npcgenerator/class-data/*.xml', function(err,files){
			files.forEach(function(file,i){
				var parser = new xml.Parser({mergeAttrs:true,explicitArray:true,strict:false,normalizeTags:true});
				var f = outDir + 'gurps/' + path.basename(file, '.xml').toLowerCase().replace(/-/g,'/') + '.json';
				nfiles.push(f);
				mkdirp.sync(path.dirname(f));
				parser.addListener('end', function(result) {
				    fs.writeFileSync(f, JSON.stringify(result));
				});
				fs.readFile(file, function(err, f){ parser.parseString(f); });
				if (i === (files.length-1)){ cb(nfiles); }
			});
		});
	*/

	var allFiles = [];
	doWordLists(function(files){
		files.forEach(function(file){ allFiles.push(file); });
		doFaker(function(files){
			files.forEach(function(file){ allFiles.push(file); });
			doNPCNames(function(files){
				files.forEach(function(file){ allFiles.push(file); });
				doInventions(function(files){
					files.forEach(function(file){ allFiles.push(file); });
					mainCB(allFiles);
				});
			});
		});
	});
};
