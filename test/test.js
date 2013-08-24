/**
 * Test file works in client-side or server-side
 */

'use strict';
/* global describe */
/* global it */

// for client-side, you should have included these as script tags (see index.html)
if (!chai){ var chai = require('chai'); }
if (!randopeep){var randopeep = require('../index.js'); }

var expect = chai.expect;

describe('randopeep', function() {

	describe('get', function() {
		var name;
		name = randopeep.get('person/modern/female','person/modern/last');
		it('should correctly generate modern female name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.get('person/modern/male','person/modern/last');
		it('should correctly generate modern male name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.get('person/netrunner');
		it('should correctly generate Netrunner name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.get('person/modern/female', 'person/netrunner');
		it('should correctly generate a female Netrunner name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.get('person/modern/male', 'person/netrunner');
		it('should correctly generate a male Netrunner name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.get('jobs');
		it('should correctly generate a job (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});
	});

	describe('cc', function() {
		var cc,visa;

		// RegExpes that validate format of CC#
		var validators = {
			'visa': new RegExp('4(?:[0-9]{12}|[0-9]{15})'),
			'mastercard':  new RegExp('5[1-5][0-9]{14}'),
			'amex': new RegExp('3[47][0-9]{13}'),
			'discover': new RegExp('6011[0-9]{12}')
		};

		// using 13 to test visa & mastercard, others should have different lengths
		for (var v in validators){
			cc = randopeep.cc(v, 13);
			it('should be able to generate a valid ' + v + ' (' + cc + ')', function() {
				expect(cc).match(validators[v]);
				if (v!='visa' && v!='mastercard'){
					expect(cc).length.is.not(13);
				}else{
					expect(cc).length.is(13);
				}
			});
		}

		visa = randopeep.cc();
		it('should fake a valid 16 digit Visa, by default (' + visa + ')', function() {
			expect(visa).match(validators.visa).length.is(16);
		});

		
	});

	describe('ipsum', function() {
		var ipsum;
		
		ipsum = randopeep.ipsum();
		it('should generate 200 words, by default.', function() {
			expect(ipsum.split(' ')).length.is(200);
		});
	});

	/*
	// need to work this out...
	describe('magic', function(){
		it('should be able to resolve randopeep.gen.person.netrunner', function(){
			expect(randopeep.gen.person.netrunner).to.not.be.empty;
		});

		it('should be able to resolve randopeep.gen.person.modern.male', function(){
			expect(randopeep.gen.person.modern.male).to.not.be.empty;
		});
	});
	*/
});