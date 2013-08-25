'use strict';


var suffixes = {
	'cyber': ['Inc', 'Corp'],
	'small': ['and Sons', 'LLC', 'Group', 'and Daughters', 'Studio'],
	'large': ['Group', 'Inc', 'Corp']
};

module.exports = function(randopeep){
	var corporate = {
		name: function(format){
			format = format || randopeep.randomEl(['cyber', 'firm', 'small','large']);
			switch(format){
			case 'cyber':
				var b = (randopeep.int(2) > 0) ? ' ' : '';
				return randopeep.get('person/netrunner') + b + randopeep.randomEl(suffixes.cyber);
			case 'firm':
				return randopeep.get('person/modern/last') + ', ' + randopeep.get('person/modern/last') + ' and ' + randopeep.get('person/modern/last');
			case 'small':
				return randopeep.get('person/modern/last') + ' ' + randopeep.randomEl(suffixes.small);
			case 'large':
				return randopeep.get('person/modern/last') + ' ' + randopeep.randomEl(suffixes.large);
			}
		},

		catchPhrase: function () {
			return randopeep.get('catch_phrase/adjective') + ' ' + randopeep.get('catch_phrase/descriptor') + ' ' + randopeep.get('catch_phrase/noun');
		},

		bs: function () {
			return randopeep.get('bs/adjective') + ' ' + randopeep.get('bs/buzz') + ' ' + randopeep.get('bs/noun');
		}
	};

	return corporate;
};