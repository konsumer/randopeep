'use strict';

module.exports = function(randopeep){
	// where do people come from that cities/streets are named after?
	var sOrigins = ['english','english','english','japanese','chinese','germanic','spanish'];

	var address = {
		zip:function(){
			return randopeep.replaceSymbolWithNumber(randopeep.randomEl(['#####', '#####-####']));
		},

		city: function (){
			switch (randopeep.int(6)) {
			case 0:
				return randopeep.format(
					'{0} {1}{2}',
					randopeep.get('city/prefix'),
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false}),
					randopeep.get('city/suffix')
				);
			case 1:
				return randopeep.format(
					'{0} {1}{2}',
					randopeep.get('city/prefix'),
					randopeep.name({'last': false, 'origin': sOrigins, 'prefix':false}),
					randopeep.get('city/suffix')
				);
	        case 2:
				return randopeep.format(
					'{0}{1}',
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false}),
					randopeep.get('city/suffix')
				);
			case 3:
				return randopeep.format(
					'{0}{1}',
					randopeep.name({'last': false, 'origin': sOrigins, 'prefix':false}),
					randopeep.get('city/suffix')
				);
	        case 4:
				return randopeep.format(
					'{0} {1}',
					randopeep.get('city/prefix'),
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false})
				);
			case 5:
				return randopeep.format(
					'{0} {1}',
					randopeep.get('city/prefix'),
					randopeep.name({'last': false, 'origin': sOrigins, 'prefix':false})
				);
	        }
	    },

		geo:function(){
			return [(randopeep.int(180 * 10000) / 10000.0 - 90.0).toFixed(4), (randopeep.int(360 * 10000) / 10000.0 - 180.0).toFixed(4)];
		},
		
		streetName: function () {
			switch (randopeep.int(5)) {
			case 0:
			case 1:
			case 2:
			case 3:
				return randopeep.format(
					'{0} {1}',
					randopeep.name({'justLast': true, 'origin': sOrigins, 'prefix':false}),
					randopeep.get('street/suffix')
				);
			case 4:
				return randopeep.format(
					'{0} {1}',
					randopeep.titleCase(randopeep.get('bs/noun')),
					randopeep.get('street/suffix')
				);
			}
		},

		streetAddress: function (useFullAddress) {
			if (useFullAddress === 'random') { useFullAddress = randopeep.randomEl([true,false]); }
			var out = (useFullAddress) ? ', ' + address.secondaryAddress() : '';
			switch (randopeep.int(3)) {
			case 0:
				return randopeep.replaceSymbolWithNumber('#####') + ' ' + address.streetName() + out;
			case 1:
				return randopeep.replaceSymbolWithNumber('####') + ' ' + address.streetName() + out;
			case 2:
				return randopeep.replaceSymbolWithNumber('###') + ' ' + address.streetName() + out;
			}
		},

		secondaryAddress: function () {
			return randopeep.replaceSymbolWithNumber(randopeep.randomEl(
				[
					'Apt. ###',
					'Suite ###'
				]
			));
		},

		phone: function(){
			return randopeep.replaceSymbolWithNumber(randopeep.get('phone'));
		}
	};

	return address;
};