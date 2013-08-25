'use strict';

module.exports = require('./src/randopeep.js');

module.exports.cc = require('./src/cc.js')(module.exports);
module.exports.ipsum = require('./src/ipsum.js')(module.exports);
module.exports.address = require('./src/address.js')(module.exports);
module.exports.corporate = require('./src/corporate.js')(module.exports);
module.exports.internet = require('./src/internet.js')(module.exports);
require('./src/interface.js')(module.exports)


// wrapper for AMD/browser-global
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
module.exports.data={};
//<browserify>
module.exports.data['bs/adjective'] = require('./data_js/bs/adjective.js');
module.exports.data['bs/buzz'] = require('./data_js/bs/buzz.js');
module.exports.data['bs/noun'] = require('./data_js/bs/noun.js');
module.exports.data['catch_phrase/adjective'] = require('./data_js/catch_phrase/adjective.js');
module.exports.data['catch_phrase/descriptor'] = require('./data_js/catch_phrase/descriptor.js');
module.exports.data['catch_phrase/noun'] = require('./data_js/catch_phrase/noun.js');
module.exports.data['city/prefix'] = require('./data_js/city/prefix.js');
module.exports.data['city/suffix'] = require('./data_js/city/suffix.js');
module.exports.data['domain/suffix'] = require('./data_js/domain/suffix.js');
module.exports.data['ipsum/lorem'] = require('./data_js/ipsum/lorem.js');
module.exports.data['jobs'] = require('./data_js/jobs.js');
module.exports.data['person/modern/female'] = require('./data_js/person/modern/female.js');
module.exports.data['person/modern/last'] = require('./data_js/person/modern/last.js');
module.exports.data['person/modern/male'] = require('./data_js/person/modern/male.js');
module.exports.data['person/netrunner'] = require('./data_js/person/netrunner.js');
module.exports.data['person/prefix/female'] = require('./data_js/person/prefix/female.js');
module.exports.data['person/prefix/male'] = require('./data_js/person/prefix/male.js');
module.exports.data['person/suffix'] = require('./data_js/person/suffix.js');
module.exports.data['phone/formats'] = require('./data_js/phone/formats.js');
module.exports.data['street/suffix'] = require('./data_js/street/suffix.js');
module.exports.data['uk/country'] = require('./data_js/uk/country.js');
module.exports.data['uk/county'] = require('./data_js/uk/county.js');
module.exports.data['us/state'] = require('./data_js/us/state.js');
module.exports.data['us/state/abbr'] = require('./data_js/us/state/abbr.js');
//</browserify>