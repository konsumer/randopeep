'use strict';

module.exports = function(randopeep){
	var internet = {
		email: function(derived){
			switch (randopeep.int(2)) {
			case 0:
				return internet.username(derived) + '@' + internet.domain();
			case 1:
				return internet.username() + '@' + internet.domain(derived);
			}
		},
		
		username:function(derived){
			if (!derived){
				switch (randopeep.int(8)) {
				case 0:
					derived = randopeep.get('person/modern/male');
					break;
				case 1:
					derived = randopeep.get('person/modern/female');
					break;
				case 2:
					derived = randopeep.get('person/modern/male') + randopeep.get('person/modern/last');
					break;
				case 3:
					derived = randopeep.get('person/modern/female') + randopeep.get('person/modern/last');
					break;
				case 4:
					derived = randopeep.get('person/netrunner') + randopeep.get('person/netrunner');
					break;
				case 5:
					derived = randopeep.get('person/netrunner');
					break;
				case 6:
					derived = randopeep.get('bs/noun');
					break;
				case 7:
					derived = randopeep.get('catch_phrase/noun');
					break;
				}
			}
			return derived.replace(' ',randopeep.randomEl(['.','_'])).toLowerCase();
		},

		domain:function(derived){
			return internet.username(derived) + '.' + randopeep.get('domain/suffix');
		},
		
		ip:function(){
			var randNum = function () {
				return (Math.random() * 254 + 1).toFixed(0);
			};

			var result = [];
			for (var i = 0; i < 4; i++) {
				result[i] = randNum();
			}

			return result.join('.');
		}
	};

	return internet;
};