'use strict';

module.exports = function(randopeep){
	
	var luhnGen = (function(){
		var d = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0];
		return function (l,s,i,m) {
			s = 0;
			for (i=0; i<l.length; i++ ){ s += parseInt(l.substring(i,i+1),10); }
			for (i=l.length-1; i>=0; i-=2 ){ s += d[parseInt(l.substring(i, i + 1),10)]; }
			m = 10 - (s % 10);
			return (m === 10) ? 0 : m;
		};
	})();

	/**
	 * Generate a credit-card #
	 * http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	 * @param  String issuer  Issuer of CC #: visa (default), mastercard, amex, discover, diners
	 * @param Number len      For visa & mastercard, can be 13 or 16 (default)
	 * @return String         Your fake CC #
	 */
	return function(issuer, len){
		issuer = issuer || 'visa';
		len = len || 16;
		if (['visa', 'mastercard', 'amex', 'discover', 'diners'].indexOf(issuer) === -1){
			return false;
		}
		var out;

		if (issuer === 'visa'){
			if (len !== 16 && len !== 13){
				len = 16;
			}
			out = 4;
		}else{
			len = 16;
		}

		if (issuer === 'mastercard'){
			out = randopeep.randomEl([51, 52, 53, 54, 55]);
		}

		if (issuer === 'amex'){
			out = randopeep.randomEl([34, 37]);
		}

		if (issuer === 'discover'){
			out = randopeep.randomEl([6011, 622126+randopeep.int(799), 644+randopeep.int(5), 65]);
		}

		if (issuer === 'diners'){
			out = randopeep.randomEl([54, 55]);
		}

		out = out.toString().split('');
		while (out.length < (len-1)){
			out.push(randopeep.int().toString());
		}

		out.push(luhnGen(out.join('')));
		return out.join('');

	};
};
