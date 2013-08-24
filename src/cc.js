'use strict';

/**
 * Generate a credit-card #
 * @param  String issuer  Issuer of CC #: visa (default), mastercard, amex, discover
 * @param Number len      For visa & mastercard, can be 13 or 16 (default)
 * @return String         Your fake CC #
 */
module.exports = function(issuer, len){
	issuer = issuer || 'visa';
	len = len || 16;

	var pos;
	var str = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var sum = 0;
	var finalDigit = 0;
	var t = 0;
	var lenOffset = 0;


	if (issuer === 'visa'){
		str[0] = 4;
		pos = 1;
	}

	if (issuer === 'mastercard'){
		str[0] = 4;
		pos = 1;
	}

	if (issuer === 'amex'){
		str[0] = 3;
		t = Math.floor(Math.random() * 4) % 4;
		str[1] = 4 + t;	  // Between 4 and 7.
		pos = 2;
		len = 15;
	}

	if (issuer === 'discover'){
		str[0] = 6;
		str[1] = 0;
		str[2] = 1;
		str[3] = 1;
		pos = 4;
		len = 16;
	}

	// Fill all the remaining numbers except for the last one with random values.
	while (pos < len - 1) {
		str[pos++] = Math.floor(Math.random() * 10) % 10;
	}

	// Calculate the Luhn checksum of the values thus far.
	lenOffset = (len + 1) % 2;
	for (pos = 0; pos < len - 1; pos++) {
		if ((pos + lenOffset) % 2) {
			t = str[pos] * 2;
			if (t > 9) {
				t -= 9;
			}
			sum += t;
		}
		else {
			sum += str[pos];
		}
	}

	// Choose the last digit so that it causes the entire string to pass the checksum.
	finalDigit = (10 - (sum % 10)) % 10;
	str[len - 1] = finalDigit;
 
	// Output the CC value.
	t = str.join('');
	t = t.substr(0, len);
	return t;
};