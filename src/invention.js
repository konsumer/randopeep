'use strict';

module.exports = function(randopeep){
	var formats = [
		'{3} {1}',
		'{3} {4} {1}',
		'{3} {0}{1}',
		'{0}{4} {2}',
		'{3} {0}{1} {2}',
		'{3} {4} {1} {0}{2}',
		'{3} {4} {1} {2}',
		'{3} {0}{4} {1} {2}'
	];

	return function(){
		return randopeep.format(
			randopeep.randomEl(formats),
			randopeep.get('invention/prefix'),
			randopeep.get('invention/function1'),
			randopeep.get('invention/function2'),
			randopeep.get('invention/catalyst1'),
			randopeep.get('invention/catalyst2')
		);
	};
};