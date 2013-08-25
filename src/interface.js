'use strict';

/**
 * Help make the interface more friendly
 */

module.exports = function(randopeep){
	function wrap(n,name){
		n = n || 1;
		var out = randopeep.getCount(n,name);
		return (n===1) ? out.pop() : out;
	}

	function wrapFunc(n, func){
		var args = Array.prototype.slice.call(arguments,2);
		n = n || 1;
		var out = [];
		for(var i=0;i<n;i++){
			out.push(func.apply(randopeep, args));
		}
		return (n===1) ? out.pop() : out;
	}

	randopeep.person = function(n, gender) {
		n = n || 1;
		var out = [];
		for(var i=0;i<n;i++){
			var g = (gender) ? gender : randopeep.randomEl(['female','male']);
			out.push(randopeep.get('person/prefix/' + g, 'person/modern/' + g, 'person/modern/last'));
		}
		return (n===1) ? out.pop() : out;
	};
	randopeep.netrunner = function(n) { return wrap(n,'person/netrunner'); };
	randopeep.job = function(n) { return wrap(n,'jobs'); };
	randopeep.state = function(n) { return wrap(n,'us/state'); };
	randopeep.state.a = function(n) { return wrap(n,'us/state/abbr'); };
	randopeep.zip = function(n){ return wrapFunc(n, randopeep.address.zip); };
	randopeep.city = function(n){ return wrapFunc(n, randopeep.address.city); };
	randopeep.geo = function(n){ return wrapFunc(n, randopeep.address.geo); };
	randopeep.streetName = function(n){ return wrapFunc(n, randopeep.address.streetName); };
	randopeep.streetAddress = function(n, useFullAddress){ return wrapFunc(n, randopeep.address.streetAddress, useFullAddress); };
	randopeep.phone = function(n){ return wrapFunc(n, randopeep.address.phone); };
	randopeep.ccnum = function(n, type){ return wrapFunc(n, randopeep.cc, type); };
	randopeep.company = function (n, type){ return wrapFunc(n, randopeep.corporate.name, type); };
	randopeep.catchPhrase = function (n){ return wrapFunc(n, randopeep.corporate.catchPhrase); };
	randopeep.bs = function (n){ return wrapFunc(n, randopeep.corporate.bs); };
	randopeep.ip = function (n){ return wrapFunc(n, randopeep.internet.ip); };
	randopeep.domain = function (n,derived){ return wrapFunc(n, randopeep.internet.domain, derived); };
	randopeep.email = function (n,derived){ return wrapFunc(n, randopeep.internet.email, derived); };
	randopeep.username = function (n,derived){ return wrapFunc(n, randopeep.internet.username, derived); };
};