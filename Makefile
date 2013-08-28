build:
	grunt

test:
	npm test

install:
	npm install

server:
	grunt server

deploy:
	grunt
	mv out/randopeep.min.js /tmp/
	git checkout gh-pages
	mv /tmp/randopeep.min.js .
	git commit -m "deploy" randopeep.min.js
	git pull
	git push
	git checkout master
	npm publish


.PHONY: install build test server deploy
