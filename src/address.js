'use strict';

module.exports = function(randopeep){
	var address = {
		zip:function(){
			return randopeep.replaceSymbolWithNumber(randopeep.randomEl(['#####', '#####-####']));
		},

		city: function (){
			switch (randopeep.int(6)) {
			case 0:
				return randopeep.get('city/prefix') + ' ' + randopeep.get('person/modern/male') + randopeep.get('city/suffix');
			case 1:
				return randopeep.get('city/prefix') + ' ' + randopeep.get('person/modern/male');
			case 2:
				return randopeep.get('person/modern/male') + randopeep.get('city/suffix');
			case 3:
				return randopeep.get('person/modern/last') + randopeep.get('city/suffix');
			case 4:
				return randopeep.get('city/prefix') + ' ' + randopeep.get('person/modern/female') + randopeep.get('city/suffix');
			case 5:
				return randopeep.get('city/prefix') + ' ' + randopeep.get('person/modern/male') + ' ' + randopeep.get('person/modern/last') + randopeep.get('city/suffix');
	        }
	    },

		latitude: function () {
			return (randopeep.int(180 * 10000) / 10000.0 - 90.0).toFixed(4);
		},

		longitude: function () {
			return (randopeep.int(360 * 10000) / 10000.0 - 180.0).toFixed(4);
		},

		geo:function(){
			return [address.latitude(), address.longitude()];
		},

		// weighted with female & last names
		streetName: function () {
			switch (randopeep.int(6)) {
			case 0:
			case 1:
				return randopeep.get('person/modern/last') + ' ' + randopeep.get('street/suffix');
			case 2:
			case 3:
				return  randopeep.get('person/modern/female') + ' ' + randopeep.get('street/suffix');
			case 4:
				return  randopeep.get('person/modern/male') + ' ' + randopeep.get('street/suffix');
			case 5:
				return  randopeep.titleCase(randopeep.get('bs/noun')) + ' ' + randopeep.get('street/suffix');
			}
		},

		streetAddress: function (useFullAddress) {
			var out = (useFullAddress) ? address.secondaryAddress() : '';
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
			return randopeep.replaceSymbolWithNumber(randopeep.get('phone/formats'));
		}
	};

	return address;
};