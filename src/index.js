'use strict';

var randopeep = {};


randopeep.getList = function(name){
	return require('../data_js/' + name + '.js');
};

randopeep.get = function(){
	var out = [];
	for (var a in arguments){
		var items = randopeep.getList(arguments[a]);
		out.push(items[Math.floor(Math.random()*items.length)]);
	}
	return out.join(" ");
};


module.exports = randopeep;