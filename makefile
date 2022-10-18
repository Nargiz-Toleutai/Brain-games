install:
	npm ci
brain-games:
	node brain-games.js
brain-calc:
	node games/brain-calc.js
brain-even:
	node games/brain-even.js
brain-gcd:
	node games/brain-gcd.js
brain-progression:
	node games/brain-progression.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
