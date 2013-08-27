/**
 * Test file works in client-side or server-side
 */

'use strict';
/* global describe */
/* global it */
/*jshint expr: true */

// for client-side, you should have included these as script tags (see index.html)
if (!chai){ var chai = require('chai'); }
if (!randopeep){var randopeep = require('../index.js'); }

var expect = chai.expect;

describe('randopeep', function() {
	describe('name', function() {
		var name;

		name = randopeep.name();
		it('should do a totally random name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese'});
		it('should do a random Chinese name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese',gender:'female'});
		it('should do a random female Chinese name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese',gender:'male'});
		it('should do a random male Chinese name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'dark/elven'});
		it('should do a random dark Elven name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'dwarven'});
		it('should do a random Dwarven name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'elven',gender:'female'});
		it('should do a random female Elven name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'elven',gender:'male'});
		it('should do a random male Elven name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'english',gender:'female'});
		it('should do a random female English name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'english',gender:'male'});
		it('should do a random male English name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'germanic',gender:'female'});
		it('should do a random female Germanic name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'germanic',gender:'male'});
		it('should do a random male Germanic name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'japanese',gender:'female'});
		it('should do a random female Japanese name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'japanese',gender:'male'});
		it('should do a random male Japanese name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner'});
		it('should do a random Netrunner name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner', last:false});
		it('should do a 1-word random Netrunner name (' + name + ')', function() {
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner', last:false, prefix:false});
		it('should do a 1-word random Netrunner name with no prefix (' + name + ')', function() {
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

		visa = randopeep.cc();
		it('should fake a valid 16 digit Visa, by default (' + visa + ')', function() {
			expect(visa).match(validators.visa).length.is(16);
		});

		// using 13 to test visa & mastercard, others should have different lengths
		for (var v in validators){
			cc = randopeep.cc(v, 13);
			it('should do a valid ' + v + ' (' + cc + ')', function() {
				expect(cc).match(validators[v]);
				if (v !== 'visa' && v !== 'mastercard'){
					expect(cc).length.is.not(13);
				}else{
					expect(cc).length.is(13);
				}
			});
		}
	});

	describe('jobs', function() {
		var job = randopeep.job();
		it('should do a job (' + job + ')', function() {
			expect(job).to.not.be.empty;
		});
	});

	// TODO: make ipsum pull from noun, adjective, and verb pools
	describe('ipsum', function() {
		var ipsum;
		
		ipsum = randopeep.ipsum();
		it('should do 200 words, by default.', function() {
			expect(ipsum.split(' ')).length.is(200);
		});
	});

	describe('address', function() {
		var city,zip,geo,state,address,county,country,phone;

		zip = randopeep.address.zip();
		it('should do a zip code ('+zip+')', function() {
			expect(zip).to.not.be.empty;
		});

		geo = randopeep.address.geo();
		it('should do a geo location ('+geo+')', function() {
			expect(geo).to.not.be.empty;
		});

		state = randopeep.address.state();
		it('should do a US state name (' + state + ')', function() {
			expect(state).to.not.be.empty;
		});

		state = randopeep.address.state.a();
		it('should do a US state abbreviation (' + state + ')', function() {
			expect(state).to.not.be.empty;
		});

		county = randopeep.address.uk.county();
		it('should do a UK county (' + county + ')', function() {
			expect(county).to.not.be.empty;
		});

		country = randopeep.address.uk.country();
		it('should do a UK country (' + country + ')', function() {
			expect(country).to.not.be.empty;
		});

		phone = randopeep.address.phone();
		it('should do a phone number (' + phone + ')', function() {
			expect(phone).to.not.be.empty;
		});

		city = randopeep.address.city();
		it('should do a city name ('+city+')', function() {
			expect(city).to.not.be.empty;
		});

		address=randopeep.address.streetAddress();
		it('should do a street address (' + address + ')', function() {
			expect(address).to.not.be.empty;
		});

		address=randopeep.address.streetAddress(true);
		it('should do a street address - full (' + address + ')', function() {
			expect(address).to.not.be.empty;
		});
	});

	describe('corporate', function() {
		var company, catchPhrase, bs;

		company = randopeep.corporate.name();
		it('should do a company name ('+company+')', function() {
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('firm');
		it('should do a firm company name ('+company+')', function() {
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('small');
		it('should do a small company name ('+company+')', function() {
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('large');
		it('should do a large company name ('+company+')', function() {
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('cyber');
		it('should do a cyber company name ('+company+')', function() {
			expect(company).to.not.be.empty;
		});

		catchPhrase = randopeep.corporate.catchPhrase();
		it('should do a catch-phrase ('+catchPhrase+')', function() {
			expect(catchPhrase).to.not.be.empty;
		});

		bs = randopeep.corporate.bs();
		it('should do some BS ('+bs+')', function() {
			expect(bs).to.not.be.empty;
		});
	});

	describe('internet', function() {
		var ip, username, domain, email;
		
		ip = randopeep.internet.ip();
		it('should do an IP address ('+ip+')', function() {
			expect(ip).to.not.be.empty;
		});

		username = randopeep.internet.username();
		it('should do a username ('+username+')', function() {
			expect(username).to.not.be.empty;
		});

		domain = randopeep.internet.domain();
		it('should do a domain name ('+domain+')', function() {
			expect(domain).to.not.be.empty;
		});

		email = randopeep.internet.email();
		it('should do an email address ('+email+')', function() {
			expect(email).to.not.be.empty;
		});

		email = randopeep.internet.email('Cool Guy');
		it('should do an email address derived from "Cool Guy" ('+email+')', function() {
			expect(email).to.not.be.empty;
		});
	});
});