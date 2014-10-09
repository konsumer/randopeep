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
randopeep.clickbait = require('./src/clickbait.js')(randopeep);

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
randopeep.data["clickbait/modifier"]=require("./data/clickbait/modifier.json");
randopeep.data["clickbait/noun"]=require("./data/clickbait/noun.json");
randopeep.data["clickbait/star"]=require("./data/clickbait/star.json");
randopeep.data["clickbait/verb"]=require("./data/clickbait/verb.json");
randopeep.data["jobs"]=require("./data/jobs.json");
randopeep.data["name/netrunner/first"]=require("./data/name/netrunner/first.json");
randopeep.data["name/suffix"]=require("./data/name/suffix.json");
randopeep.data["us/state"]=require("./data/us/state.json");
randopeep.data["us/state/abbr"]=require("./data/us/state/abbr.json");
randopeep.data["city/prefix"]=require("./data/city/prefix.json");
randopeep.data["city/suffix"]=require("./data/city/suffix.json");
randopeep.data["street/suffix"]=require("./data/street/suffix.json");
randopeep.data["uk/county"]=require("./data/uk/county.json");
randopeep.data["uk/country"]=require("./data/uk/country.json");
randopeep.data["bs/adjective"]=require("./data/bs/adjective.json");
randopeep.data["bs/buzz"]=require("./data/bs/buzz.json");
randopeep.data["bs/noun"]=require("./data/bs/noun.json");
randopeep.data["domain/suffix"]=require("./data/domain/suffix.json");
randopeep.data["name/prefix/female"]=require("./data/name/prefix/female.json");
randopeep.data["name/prefix/male"]=require("./data/name/prefix/male.json");
randopeep.data["catchPhrase/adjective"]=require("./data/catchPhrase/adjective.json");
randopeep.data["catchPhrase/descriptor"]=require("./data/catchPhrase/descriptor.json");
randopeep.data["catchPhrase/noun"]=require("./data/catchPhrase/noun.json");
randopeep.data["phone"]=require("./data/phone.json");
randopeep.data["ipsum/lorem"]=require("./data/ipsum/lorem.json");
randopeep.data["name/chinese/female/first"]=require("./data/name/chinese/female/first.json");
randopeep.data["name/chinese/last"]=require("./data/name/chinese/last.json");
randopeep.data["name/chinese/male/first"]=require("./data/name/chinese/male/first.json");
randopeep.data["name/dark/elven/female/first"]=require("./data/name/dark/elven/female/first.json");
randopeep.data["name/dwarven/male/first"]=require("./data/name/dwarven/male/first.json");
randopeep.data["name/elven/female/first"]=require("./data/name/elven/female/first.json");
randopeep.data["name/elven/last"]=require("./data/name/elven/last.json");
randopeep.data["name/elven/male/first"]=require("./data/name/elven/male/first.json");
randopeep.data["name/english/female/first"]=require("./data/name/english/female/first.json");
randopeep.data["name/english/last"]=require("./data/name/english/last.json");
randopeep.data["name/english/male/first"]=require("./data/name/english/male/first.json");
randopeep.data["name/germanic/female/first"]=require("./data/name/germanic/female/first.json");
randopeep.data["name/germanic/last"]=require("./data/name/germanic/last.json");
randopeep.data["name/germanic/male/first"]=require("./data/name/germanic/male/first.json");
randopeep.data["name/japanese/female/first"]=require("./data/name/japanese/female/first.json");
randopeep.data["name/japanese/last"]=require("./data/name/japanese/last.json");
randopeep.data["name/japanese/male/first"]=require("./data/name/japanese/male/first.json");
randopeep.data["name/orcish/first"]=require("./data/name/orcish/first.json");
randopeep.data["name/spanish/female/first"]=require("./data/name/spanish/female/first.json");
randopeep.data["name/spanish/last"]=require("./data/name/spanish/last.json");
randopeep.data["name/spanish/male/first"]=require("./data/name/spanish/male/first.json");
randopeep.data["invention/prefix"]=require("./data/invention/prefix.json");
randopeep.data["invention/function1"]=require("./data/invention/function1.json");
randopeep.data["invention/function2"]=require("./data/invention/function2.json");
randopeep.data["invention/catalyst1"]=require("./data/invention/catalyst1.json");
randopeep.data["invention/catalyst2"]=require("./data/invention/catalyst2.json");
//</data>
