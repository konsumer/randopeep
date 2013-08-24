# Rando Peeps Data

Generate details about people, in javascript, based on data files. Originally made for generating fake NPCs for RPGs & fake accounts for things online.

It's basically a random lookup from a list of names.

Built-in lists include:

*  Modern male/female names from census data (person/modern/male, person/modern/female)
*  Hacker names (person/netrunner)

## Usage


### Adding your own name-libraries

You can add your own, if you install dev-tools with `npm install` then add whatever you want to `data/` dir, and run `grunt`.

Format is 1 word per line.

### Using different name-libraries

Say you want a modern Female firstname, and a hacker lastname:

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
<script src="randopeep.min.js"></script>
<script>
	document.body.innerHTML = 'I am a totally leet haxor, my name is ' + randopeep.get('person/netrunner');
</script>
```