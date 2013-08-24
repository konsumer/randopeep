/**
 * Test file works in client-side or server-side
 */

'use strict';
/* global describe */
/* global it */

// for client-side, you should have included these as script tags (see index.html)
if (!chai){ var chai = require('chai'); }
if (!randopeep){var randopeep = require('../src/index.js'); }

var expect = chai.expect;

describe('randopeep', function() {
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