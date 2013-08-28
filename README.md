# [Rando Peeps Data](http://konsumer.github.io/randopeep/)

[![NPM](https://nodei.co/npm/randopeep.png)](https://nodei.co/npm/randopeep/)
[![Build Status](https://travis-ci.org/konsumer/randopeep.png?branch=master)](https://travis-ci.org/konsumer/randopeep)
[Local Test](http://konsumer.github.io/randopeep/test/)

Generate random fake people, in javascript, based on data files. Originally made for generating fake NPCs for RPGs & fake accounts for things online.

## What random stuff can it generate?

All parameters are optional.

`n` parameters is how many you would like, leave blank for 1.

### People

* `randopeep.name(params, n)` - a person's name, `params` are explained below
* `randopeep.job(n)` - a job a person might do
* `randopeep.invention(n)` - a seemingly awesome-sounding invention

### Places

* `randopeep.address.state(n)` - a US state
* `randopeep.address.state.a(n)` - an abbreviated US state
* `randopeep.address.zip(n)` - a zipcode
* `randopeep.address.city(n)` - a pretend city
* `randopeep.address.geo(n)` - a geolocation
* `randopeep.address.streetName(n)` - a streetName
* `randopeep.address.streetAddress(useFullAddress, n)` - a street address, set useFullAddress to get secondary address
* `randopeep.address.phone(n)` - a phone number
* `randopeep.address.uk.country(n)` - a country in the UK
* `randopeep.address.uk.county(n)` - a county in the UK


### Credit-card Numbers

* `randopeep.cc(type, charCount, n)` - a credit-card, `type` is "visa", "mastercard", "amex", or "discover". `charCount` should be 13 or 16


### Corporate Things

* `randopeep.corporate.name(type, n)` - a corporate name, `type` is explained below
* `randopeep.corporate.catchPhrase(n)` - `n` corporate catchphrases
* `randopeep.corporate.bs(n)` - `n` lines of corporate BS


### Internet Things

* `randopeep.internet.ip(n)` - an IP address
* `randopeep.internet.domain(derived, n)` - a internet domainname, `derived` is explained, below
* `randopeep.internet.email(derived, n)` - an email address, `derived` is explained, below
* `randopeep.internet.username(derived, n)` - an internet username, `derived` is explained, below


### Random Text

* `randopeep.ipsum(n, list)` - `n` words from ipsum `list`, default list is "lorem" and default count is 200


### Other stuff

* `randopeep.data` - the raw data, keyed by list name
* `randopeep.get(n, list)` - `n` items from `list`


### Parameters used above

#### `params` for `randopeep.name`

A lot of different types of names can be generated. All parameters are optional, here are the defaults:

```javascript
{
	'origin' : random - 'chinese', 'dark/elven', 'dwarven','elven', 'english', 'germanic','japanese','orcish','spanish','netrunner',
	'gender': random - 'male','female',
	'last': true,
	'justLast': false,
	'prefix': random - true, false,
	'returnData': false,
}
```

* `origin` - the place/time the names come from (see data dir)
* `gender` - male/female, if names are gendered
* `last` - get a lastname?
* `justLast` - get lastname only?
* `prefix` - look up gendered prefix, if applicable
* `returnData` - return options (as generated) with `name` field, good if you want random gender/origin, but want to know about it after

#### `type` for `randopeep.corporate.name`

It can be one of these:

* cyber -  a company from the future
* firm - a law-firm, all last names are random non-fantasy, but from the same origin
* small - a small company
* large - a large corp


#### `derived` for `randopeep.internet.*`

Will attempt to use the text that you give it as a base for generating other things.  Makes more-legit looking email, if you already know the name, for example.


## Usage

See unit-tests in [test/test.js](https://github.com/konsumer/randopeep/blob/master/test/test.js) if you need more details.

### Node

Install: `npm install randopeep`

in your code:

```javascript
var randopeep = require('randopeep');
var myFakeName = randopeep.name();
```

### Browser

Just include `build/randopeep.min.js` in your thing, and use it like normal:

```html
<script src="http://konsumer.github.io/randopeep/randopeep.min.js"></script>
<script>
	document.body.innerHTML = 'I am a totally cool dude, my name is ' + randopeep.name({gender:'male'});
</script>
```

There is also support for AMD/require.js, just put out/randopeep.js in your application dir, and do this:

```javascript
define(['randopeep'], function(peep){
	document.body.innerHTML = 'I am a totally cool lady, my name is ' + randopeep.name({gender:'female'});
});
```

### Lite-version

If you want to load your data dynamically, instead of inline, build with `grunt lite-browser` or `grunt lite-node`. For `grunt lite-browser`, make sure `dataLocation` in Gruntfile.js is set to a URL where your data can be found.

### Adding your own name-libraries

You can add your own, if you install dev-tools with `npm install` then add whatever you want to [data-src/wordlists](https://github.com/konsumer/randopeep/tree/master/data-src/wordlists) dir, and run `grunt`.

Format is 1 item per line.

### Using name-libraries

Say you want an English female firstname, and a hacker lastname:

```javascript
var myLeetName = randopeep.get(1, 'name/english/female/first') + ' ' + randopeep.get(1, 'name/netrunner/first');
```

## Testing

You can run my CLI tests with `npm test` or open test/index.html to run same tests, in-browser.


## TODO

* use the GURPS class-data
* ipsum could be smarter with English, so it can assemble seemingly sensical text.


## Credits

* see [data credits](https://github.com/konsumer/randopeep/tree/master/data-src) for info about where a lot of this stuff came from.
