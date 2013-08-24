# [Rando Peeps Data](http://konsumer.github.io/randopeeps/)

Generate details about people, in javascript, based on data files. Originally made for generating fake NPCs for RPGs & fake accounts for things online.

It's basically a random lookup from a list of names, and some quick functions for generating ranndom data, with a lot of ideas from [Faker](https://github.com/Marak/Faker.js)

Built-in lists of random thingsinclude:

* Modern male/female names from census data (person/modern/male, person/modern/female)
* Hacker names (person/netrunner)
* Jobs a person might do in the modern world (jobs)

Built-in generator functions for random stuff include:

* Credit card numbers (randopeep.cc('mastercard'))


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
var myLeetName = randopeep.get('person/netrunner');
```

### Browser

Just include `build/randopeep.min.js` in your thing, and use it like normal:

```html
<script src="http://konsumer.github.io/randopeeps/randopeep.min.js"></script>
<script>
	document.body.innerHTML = 'I am a totally leet haxor, my name is ' + randopeep.get('person/netrunner');
</script>
```

## Testing

You can run my CLI tests with `npm test` or open test/index.html to run same tests, in-browser.  The tests give excellant usage examples.
