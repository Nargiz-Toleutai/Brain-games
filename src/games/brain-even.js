import * as url from 'node:url';
import runGame from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const isEven = (n) => n % 2 === 0;

const description = 'Answer "yes" if given number is even. Otherwise answer "no".';

const generateRound = () => {
  const num = getRandomNumber(0, 50);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, String(answer)];
};

export default () => runGame(description, generateRound);

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    runGame(description, generateRound);
  }
}