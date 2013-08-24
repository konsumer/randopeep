'use strict';

module.exports = require('./src/randopeep.js');
module.exports.cc = require('./src/cc.js')(module.exports);
module.exports.ipsum = require('./src/ipsum.js')(module.exports);

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
module.exports.lists['data_js/bs/adjective.js'] = require('./data_js/bs/adjective.js');
module.exports.lists['data_js/bs/buzz.js'] = require('./data_js/bs/buzz.js');
module.exports.lists['data_js/bs/noun.js'] = require('./data_js/bs/noun.js');
module.exports.lists['data_js/catch_phrase/adjective.js'] = require('./data_js/catch_phrase/adjective.js');
module.exports.lists['data_js/catch_phrase/descriptor.js'] = require('./data_js/catch_phrase/descriptor.js');
module.exports.lists['data_js/catch_phrase/noun.js'] = require('./data_js/catch_phrase/noun.js');
module.exports.lists['data_js/city/prefix.js'] = require('./data_js/city/prefix.js');
module.exports.lists['data_js/city/suffix.js'] = require('./data_js/city/suffix.js');
module.exports.lists['data_js/domain/suffix.js'] = require('./data_js/domain/suffix.js');
module.exports.lists['data_js/ipsum/lorem.js'] = require('./data_js/ipsum/lorem.js');
module.exports.lists['data_js/jobs.js'] = require('./data_js/jobs.js');
module.exports.lists['data_js/person/modern/female.js'] = require('./data_js/person/modern/female.js');
module.exports.lists['data_js/person/modern/last.js'] = require('./data_js/person/modern/last.js');
module.exports.lists['data_js/person/modern/male.js'] = require('./data_js/person/modern/male.js');
module.exports.lists['data_js/person/netrunner.js'] = require('./data_js/person/netrunner.js');
module.exports.lists['data_js/person/prefix/female.js'] = require('./data_js/person/prefix/female.js');
module.exports.lists['data_js/person/prefix/male.js'] = require('./data_js/person/prefix/male.js');
module.exports.lists['data_js/person/suffix.js'] = require('./data_js/person/suffix.js');
module.exports.lists['data_js/phone/formats.js'] = require('./data_js/phone/formats.js');
module.exports.lists['data_js/street/suffix.js'] = require('./data_js/street/suffix.js');
module.exports.lists['data_js/uk/country.js'] = require('./data_js/uk/country.js');
module.exports.lists['data_js/uk/county.js'] = require('./data_js/uk/county.js');
module.exports.lists['data_js/us/state.js'] = require('./data_js/us/state.js');
module.exports.lists['data_js/us/state/abbr.js'] = require('./data_js/us/state/abbr.js');
//</browserify>