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

		lat: function () {
			return (randopeep.int(180 * 10000) / 10000.0 - 90.0).toFixed(4);
		},

		long: function () {
			return (randopeep.int(360 * 10000) / 10000.0 - 180.0).toFixed(4);
		}
	};

	return address;
};