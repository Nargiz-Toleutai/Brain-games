install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node src/games/brain-calc.js
brain-even:
	node  src/games/brain-even.js
brain-gcd:
	node  src/games/brain-gcd.js
brain-progression:
	node  src/games/brain-progression.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
