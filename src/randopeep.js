'use strict';

var randopeep = {};

/**
 * Load an internal dictionary wordlist
 * @param  String name  name of built-in dictionary
 * @return Array        the members of that dictionary
 */
randopeep.getList = function(name){
	return randopeep.lists['data_js/' + name + '.js'];
};

/**
 * Get an element of a built-in dictionary of words
 * @param String [multiple]  all the dictionary names you want to load, in order
 * @return String            random array items, joined by " "
 */
randopeep.get = function(){
	var out = [];
	for (var a in arguments){
		var items = randopeep.getList(arguments[a]);
		out.push(items[Math.floor(Math.random()*items.length)]);
	}
	return out.join(' ');
};

randopeep.titleCase = function(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


module.exports = randopeep;