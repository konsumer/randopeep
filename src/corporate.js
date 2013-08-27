'use strict';

module.exports = function(randopeep){
	var suffixes = {
		'cyber': ['Inc', 'Corp', 'Blok'],
		'small': ['and Sons', 'LLC', 'Group', 'and Daughters', 'Studio'],
		'large': ['Group', 'Inc', 'Corp']
	};

	// where do companies come from?
	var sOrigins = ['english','japanese','chinese','germanic','spanish'];

	var corporate = {
		name: function(format){
			format = format || randopeep.randomEl(['cyber', 'firm', 'small','large']);
			switch(format){
			case 'cyber':
				return randopeep.format(
					'{0}{1}',
					randopeep.name({'last': false, 'origin': 'netrunner', 'prefix':false}),
					randopeep.randomEl(suffixes.cyber)
				);
			case 'firm':
				// they are all from the same origin
				var origin = randopeep.randomEl(sOrigins);
				return randopeep.format(
					'{0}, {1} and {2}',
					randopeep.name({'justLast': true, 'origin': origin, 'prefix':false}),
					randopeep.name({'justLast': true, 'origin': origin, 'prefix':false}),
					randopeep.name({'justLast': true, 'origin': origin, 'prefix':false})
				);
			case 'small':
				return randopeep.format(
					'{0} {1}',
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false}),
					randopeep.randomEl(suffixes.small)
				);
			case 'large':
				return randopeep.format(
					'{0} {1}',
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false}),
					randopeep.randomEl(suffixes.large)
				);
			}
		},

		catchPhrase: function () {
			return randopeep.format(
				'{0} {1} {2}',
				randopeep.get('catchPhrase/adjective'),
				randopeep.get('catchPhrase/descriptor'),
				randopeep.get('catchPhrase/noun')
			);
		},

		bs: function () {
			return randopeep.format(
				'{0} {1} {2}',
				randopeep.get('bs/adjective'),
				randopeep.get('bs/buzz'),
				randopeep.get('bs/noun')
			);
		}
	};

	return corporate;
};