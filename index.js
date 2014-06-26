'use strict';

/* global module */
/* global require */
/* global define */

var randopeep = {};

require('./src/randopeep.js')(randopeep);

randopeep.name = require('./src/name.js')(randopeep);
randopeep.cc = require('./src/cc.js')(randopeep);
randopeep.ipsum = require('./src/ipsum.js')(randopeep);
randopeep.address = require('./src/address.js')(randopeep);
randopeep.corporate = require('./src/corporate.js')(randopeep);
randopeep.internet = require('./src/internet.js')(randopeep);
randopeep.invention = require('./src/invention.js')(randopeep);

module.exports = require('./src/interface.js')(randopeep);

// wrapper for AMD/browser-global
// slightly wonky way to hand paths to laoder
// should figure out how to lazy-load better
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

// pre-load data files
randopeep.data = {};
//<data>
randopeep.dataLocation="http://konsumer.github.io/randopeep/data/";
//</data>