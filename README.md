# [Rando Peeps Data](http://konsumer.github.io/randopeep/)

Generate fake details about people, in javascript, based on data files. Originally made for generating fake NPCs for RPGs & fake accounts for things online.

It's basically a random lookup from a list of names, and some quick functions for generating random data, with a lot of ideas from [Faker](https://github.com/Marak/Faker.js)

## What random stuff can it generate?

All parameters are optional.

### Places

* `randopeep.zip(count)` - US zipcodes
* `randopeep.city(count)` - City name
* `randopeep.geo(count)` - Geo-location
* `randopeep.streetName(count)` - Street name
* `randopeep.streetAddress(count, useFullAddress)` - Street address: , useFullAddress is a boolean for including secondary address
* `randopeep.phone(count)` - Phone Number
* `randopeep.uk.country(count)` - UK countries
* `randopeep.uk.county(count)` - UK counties


### Credit-card Numbers

* `randopeep.ccnum(count, type)` - Seemingly legit CC#'s: type includes visa, mastercard, amex, discover


### Corporate Things

* `randopeep.company(count, type)` - Company names: type includes cyber, firm, small, large
* `randopeep.catchPhrase(count)` - Corporate catch-phrases
* `randopeep.bs(count)` - Corporate BS


### Internet Things

* `randopeep.ip(count)` - IP address
* `randopeep.domain(count, derived)` - Domain name: derived is a string to derive the name from
* `randopeep.email(count, derived)` - Email address: derived is a string to derive the name from
* `randopeep.username(count, derived)` - Username: derived is a string to derive the name from


### Random Text

* `randopeep.ipsum(count)` - Ipsum text: default count is 200 words


## Usage

### Adding your own name-libraries

You can add your own, if you install dev-tools with `npm install` then add whatever you want to `data/` dir, and run `grunt`.

Format is 1 item per line.

### Using name-libraries

Say you want a modern female firstname, and a hacker lastname:

```javascript
var myLeetName = randopeep.get('person/modern/female', 'person/netrunner');
```


### Node

Install: `npm install randopeep`

in your code:

```javascript
var randopeep = require('randopeep');
var myLeetName = randopeep.netrunner();
```

### Browser

Just include `build/randopeep.min.js` in your thing, and use it like normal:

```html
<script src="http://konsumer.github.io/randopeep/randopeep.min.js"></script>
<script>
	document.body.innerHTML = 'I am a totally leet haxor, my name is ' + randopeep.netrunner();
</script>
```

There is also support for AMD/require.js, just put build/randopeep.js in your application dir, and do this:

```javascript
define(['randopeep'], function(peep){
	document.body.innerHTML = 'I am a totally leet haxor, my name is ' + peep.netrunner();
});
```

## Testing

You can run my CLI tests with `npm test` or open test/index.html to run same tests, in-browser.  The tests give excellant usage examples.
