'use strict';

module.exports = function(randopeep){
	// where do domains/usernames come from?
	var sOrigins = ['netrunner','netrunner','netrunner','english','japanese','chinese','germanic','spanish'];

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
				switch (randopeep.int(3)) {
				case 0:
					derived = randopeep.name({'justLast':randopeep.randomEl([true,false]) , 'origin': sOrigins, 'prefix':false});
					break;
				case 1:
					derived = randopeep.get('bs/noun');
					break;
				case 2:
					derived = randopeep.get('catchPhrase/noun');
					break;
				}
			}
			return derived.replace(' ',randopeep.randomEl(['.','_'])).toLowerCase();
		},

		domain:function(derived){
			return randopeep.format(
				'{0}.{1}',
				internet.username(derived),
				randopeep.get('domain/suffix')
			);
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