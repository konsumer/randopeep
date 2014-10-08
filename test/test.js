/**
 * Test file works in client-side or server-side
 */

'use strict';
/* global describe */
/* global it */
/* global before */
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
			// name = randopeep.name();
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese'});
		it('should do a random Chinese name (' + name + ')', function() {
			// name = randopeep.name({origin:'chinese'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese',gender:'female'});
		it('should do a random female Chinese name (' + name + ')', function() {
			// name = randopeep.name({origin:'chinese',gender:'female'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'chinese',gender:'male'});
		it('should do a random male Chinese name (' + name + ')', function() {
			// name = randopeep.name({origin:'chinese',gender:'male'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'dark/elven'});
		it('should do a random dark Elven name (' + name + ')', function() {
			// name = randopeep.name({origin:'dark/elven'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'dwarven'});
		it('should do a random Dwarven name (' + name + ')', function() {
			// name = randopeep.name({origin:'dwarven'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'elven',gender:'female'});
		it('should do a random female Elven name (' + name + ')', function() {
			// name = randopeep.name({origin:'elven',gender:'female'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'elven',gender:'male'});
		it('should do a random male Elven name (' + name + ')', function() {
			// name = randopeep.name({origin:'elven',gender:'male'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'english',gender:'female'});
		it('should do a random female English name (' + name + ')', function() {
			// name = randopeep.name({origin:'english',gender:'female'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'english',gender:'male'});
		it('should do a random male English name (' + name + ')', function() {
			// name = randopeep.name({origin:'english',gender:'male'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'germanic',gender:'female'});
		it('should do a random female Germanic name (' + name + ')', function() {
			// name = randopeep.name({origin:'germanic',gender:'female'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'germanic',gender:'male'});
		it('should do a random male Germanic name (' + name + ')', function() {
			// name = randopeep.name({origin:'germanic',gender:'male'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'japanese',gender:'female'});
		it('should do a random female Japanese name (' + name + ')', function() {
			// name = randopeep.name({origin:'japanese',gender:'female'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'japanese',gender:'male'});
		it('should do a random male Japanese name (' + name + ')', function() {
			// name = randopeep.name({origin:'japanese',gender:'male'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner'});
		it('should do a random Netrunner name (' + name + ')', function() {
			// name = randopeep.name({origin:'netrunner'});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner', last:false});
		it('should do a 1-word random Netrunner name (' + name + ')', function() {
			// name = randopeep.name({origin:'netrunner', last:false});
			expect(name).to.not.be.empty;
		});

		name = randopeep.name({origin:'netrunner', last:false, prefix:false});
		it('should do a 1-word random Netrunner name with no prefix (' + name + ')', function() {
			// name = randopeep.name({origin:'netrunner', last:false, prefix:false});
			expect(name).to.not.be.empty;
		});
	});

	describe('cc', function() {
		var regex, cc=[];

		cc = [
			randopeep.cc(),
			randopeep.cc('visa', 13),
			randopeep.cc('mastercard'),
			randopeep.cc('mastercard',13),
			randopeep.cc('amex'),
			randopeep.cc('discover')
		];

		regex = {
			'visa': new RegExp('4(?:[0-9]{12}|[0-9]{15})'),
			'mastercard':  new RegExp('5[1-5][0-9]{14}'),
			'amex': new RegExp('3[47][0-9]{13}'),
			'discover': new RegExp('6[0-9]{15}') // not the best, I got lazy...
		};

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
		var luhnVal = function (l,d) {
			d = parseInt(l.replace(/\s/g, '').substring(l.length-1, l.length),10);
			return luhnGen(l.substring(0,l.length-1)) === parseInt(d,10);
		};
		var valid = function(t,v){
			return v.match(regex[t]) && luhnVal(v);
		};

		it('should fake a Visa, by default ('+cc[0]+')', function() {
			// cc[0] = randopeep.cc();
			expect(valid('visa', cc[0])).to.be.true;
		});

		it('should fake a 13-digit Visa ('+cc[1]+')', function() {
			// cc[1] = randopeep.cc('visa', 13);
			expect(valid('visa', cc[1])).to.be.true;
			expect(cc[1]).length.is(13);
		});

		it('should fake a Mastercard ('+cc[2]+')', function() {
			// cc[2] = randopeep.cc('mastercard');
			expect(valid('mastercard', cc[2])).to.be.true;
		});

		it('should fake a 16-digit Mastercard, even if I ask for 13 ('+cc[3]+')', function() {
			// cc[3] = randopeep.cc('mastercard',13);
			expect(valid('mastercard', cc[3])).to.be.true;
			expect(cc[3]).length.is(16);
		});

		it('should fake an American Express ('+cc[4]+')', function() {
			// cc[4] = randopeep.cc('amex');
			expect(valid('amex', cc[4])).to.be.true;
		});

		it('should fake a Discover ('+cc[5]+')', function() {
			// cc[5] = randopeep.cc('discover');
			expect(valid('discover', cc[5])).to.be.true;
		});
	});


	describe('jobs', function() {
		var job = randopeep.job();
		it('should do a job (' + job + ')', function() {
			// job = randopeep.job();
			expect(job).to.not.be.empty;
		});
	});

	describe('ipsum', function() {
		var ipsum = randopeep.ipsum();
		it('should do 200 words, by default.', function() {
			// ipsum = randopeep.ipsum();
			expect(ipsum.split(' ')).length.is(200);
		});

		var ipsum2 = randopeep.ipsum(20);
		it('should do 20 words of random text ('+ipsum2+')', function() {
			// ipsum2 = randopeep.ipsum(20);
			expect(ipsum2).to.not.be.empty;
		});
	});

	describe('address', function() {
		var city,zip,geo,state,address,county,country,phone;

		zip = randopeep.address.zip();
		it('should do a zip code ('+zip+')', function() {
			// zip = randopeep.address.zip();
			expect(zip).to.not.be.empty;
		});

		geo = randopeep.address.geo();
		it('should do a geo location ('+geo+')', function() {
			// geo = randopeep.address.geo();
			expect(geo).to.not.be.empty;
		});

		state = randopeep.address.state();
		it('should do a US state name (' + state + ')', function() {
			// state = randopeep.address.state();
			expect(state).to.not.be.empty;
		});

		state = randopeep.address.state.a();
		it('should do a US state abbreviation (' + state + ')', function() {
			// state = randopeep.address.state.a();
			expect(state).to.not.be.empty;
		});

		county = randopeep.address.uk.county();
		it('should do a UK county (' + county + ')', function() {
			// county = randopeep.address.uk.county();
			expect(county).to.not.be.empty;
		});

		country = randopeep.address.uk.country();
		it('should do a UK country (' + country + ')', function() {
			// country = randopeep.address.uk.country();
			expect(country).to.not.be.empty;
		});

		phone = randopeep.address.phone();
		it('should do a phone number (' + phone + ')', function() {
			// phone = randopeep.address.phone();
			expect(phone).to.not.be.empty;
		});

		city = randopeep.address.city();
		it('should do a city name ('+city+')', function() {
			// city = randopeep.address.city();
			expect(city).to.not.be.empty;
		});

		address=randopeep.address.streetAddress();
		it('should do a street address (' + address + ')', function() {
			// address=randopeep.address.streetAddress();
			expect(address).to.not.be.empty;
		});

		address=randopeep.address.streetAddress(true);
		it('should do a street address - full (' + address + ')', function() {
			// address=randopeep.address.streetAddress(true);
			expect(address).to.not.be.empty;
		});
	});

	describe('corporate', function() {
		var company, catchPhrase, bs;

		company = randopeep.corporate.name();
		it('should do a company name ('+company+')', function() {
			// company = randopeep.corporate.name();
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('firm');
		it('should do a firm company name ('+company+')', function() {
			// company = randopeep.corporate.name('firm');
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('small');
		it('should do a small company name ('+company+')', function() {
			// company = randopeep.corporate.name('small');
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('large');
		it('should do a large company name ('+company+')', function() {
			// company = randopeep.corporate.name('large');
			expect(company).to.not.be.empty;
		});

		company = randopeep.corporate.name('cyber');
		it('should do a cyber company name ('+company+')', function() {
			// company = randopeep.corporate.name('cyber');
			expect(company).to.not.be.empty;
		});

		catchPhrase = randopeep.corporate.catchPhrase();
		it('should do a catch-phrase ('+catchPhrase+')', function() {
			// catchPhrase = randopeep.corporate.catchPhrase();
			expect(catchPhrase).to.not.be.empty;
		});

		bs = randopeep.corporate.bs();
		it('should do some BS ('+bs+')', function() {
			// bs = randopeep.corporate.bs();
			expect(bs).to.not.be.empty;
		});
	});

	describe('internet', function() {
		var ip, username, domain, email;
		
		ip = randopeep.internet.ip();
		it('should do an IP address ('+ip+')', function() {
			// ip = randopeep.internet.ip();
			expect(ip).to.not.be.empty;
		});

		username = randopeep.internet.username();
		it('should do a username ('+username+')', function() {
			// username = randopeep.internet.username();
			expect(username).to.not.be.empty;
		});

		domain = randopeep.internet.domain();
		it('should do a domain name ('+domain+')', function() {
			// domain = randopeep.internet.domain();
			expect(domain).to.not.be.empty;
		});

		email = randopeep.internet.email();
		it('should do an email address ('+email+')', function() {
			// email = randopeep.internet.email();
			expect(email).to.not.be.empty;
		});

		email = randopeep.internet.email('Cool Guy');
		it('should do an email address derived from "Cool Guy" ('+email+')', function() {
			// email = randopeep.internet.email('Cool Guy');
			expect(email).to.not.be.empty;
		});
	});

	describe('invention', function() {
		var invention = randopeep.invention();
		it('should do an invention ('+invention+')', function() {
			// invention = randopeep.invention();
			expect(invention).to.not.be.empty;
		});
	});

	describe('clickbait', function() {
		var clickbait = randopeep.clickbait.headline();
		it('should do an clickbait headline ('+clickbait+')', function() {
			// clickbait = randopeep.clickbait.headline();
			expect(clickbait).to.not.be.empty;
		});

		var star = randopeep.clickbait.star();
		clickbait = randopeep.clickbait.headline(star);
		it('should do an clickbait headline about '+star+' ('+clickbait+')', function() {
			// star = randopeep.clickbait.star();
			// clickbait = randopeep.clickbait.headline(star);
			expect(clickbait).to.not.be.empty;
		});
	});
});