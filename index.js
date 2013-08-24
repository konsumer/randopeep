'use strict';

module.exports = require('./src/randopeep.js');
module.exports.cc = require('./src/cc.js');


// wrapper for AMD/browser global
/* global define */
if (typeof(define) === 'function'){
	define(function(){
		return module.exports;
	});
}else{
	if (typeof(window) !== 'undefined'){
		window.randopeep = module.exports;
	}
}

// these are pre-cached by grunt, so browserify knows they are loaded:
module.exports.lists = {};
//<browserify>
module.exports.lists['data_js/jobs.js'] = require('./data_js/jobs.js');
module.exports.lists['data_js/person/modern/female.js'] = require('./data_js/person/modern/female.js');
module.exports.lists['data_js/person/modern/last.js'] = require('./data_js/person/modern/last.js');
module.exports.lists['data_js/person/modern/male.js'] = require('./data_js/person/modern/male.js');
module.exports.lists['data_js/person/netrunner.js'] = require('./data_js/person/netrunner.js');
//</browserify>