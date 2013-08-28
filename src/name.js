'use strict';

module.exports = function(randopeep){
	return function(params){
		params = params || {};
		var defaults = {
			'origin': ['chinese', 'dark/elven', 'dwarven','elven', 'english', 'germanic','japanese','orcish','spanish','netrunner'],
			'gender': ['male','female'],
			'last': true,
			'justLast': false,
			'prefix': [true, false],
			'returnData': false,
		};

		// arrays mean "pick a random 1"
		// if emtpy, set default
		for (var i in defaults){
			if (typeof(params[i]) === 'undefined'){
				params[i] = defaults[i];
			}
			if (typeof(params[i]) === 'object'){
				params[i] = randopeep.randomEl(params[i]);
			}
		}



		// some don't have gender
		// some don't have titles
		// some don't have prefixes
		if (params.origin === 'dark/elven'){
			params.gender = 'female';
			params.prefix = false;
		}
		if (params.origin === 'dwarven'){
			params.last = false;
			params.gender = 'male';
			params.prefix = false;
		}
		if (params.origin === 'orcish'){
			params.last = false;
			params.gender = false;
			params.prefix = false;
		}
		if (params.origin === 'netrunner'){
			params.gender = false;
		}
		if (params.origin === 'elven'){
			params.prefix = false;
		}

		var key = 'name/' + params.origin + '/';
		var out=[];

		if (params.prefix){
			if (params.gender){
				out.push(randopeep.get('name/prefix/'+params.gender));
			}else{
				out.push(randopeep.get('name/prefix/'+randopeep.randomEl(['male','female'])));
			}
		}
		
		if (!params.justLast){
			if (params.gender){
				out.push(randopeep.get(key + params.gender + '/first'));
			}else{
				out.push(randopeep.get(key + 'first'));
			}
		}

		if (params.last && params.origin !== 'netrunner'){
			if (params.origin !== 'dark/elven'){
				out.push(randopeep.get(key + 'last'));
			}else{
				out.push(randopeep.get('name/elven/last'));
			}
		}

		if (params.last && params.origin === 'netrunner'){
			out.push(randopeep.get(key + 'first'));
		}

		params.name = out.join(' ');

		return (params.returnData) ? params : params.name;

	};
};