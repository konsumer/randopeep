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

randopeep.int = function(max){
	return Math.floor(Math.random() * max);
};

randopeep.randomEl =  function (array) {
    return array[randopeep.int(array.length)];
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
		out.push(randopeep.randomEl(items));
	}
	return out.join(' ');
};

/**
 * Utility to turn "ssssSomeText" into "Sssssometext"
 * @param  String  str input
 * @return String      title-cased text
 */
randopeep.titleCase = function(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// parses string for a symbol and replace it with a random number from 1-10
randopeep.replaceSymbolWithNumber = function (string, symbol) {
    // default symbol is '#'
    if (symbol === undefined) {
        symbol = '#';
    }

    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            str += Math.floor(Math.random() * 10);
        } else {
            str += string[i];
        }
    }
    return str;
};



module.exports = randopeep;