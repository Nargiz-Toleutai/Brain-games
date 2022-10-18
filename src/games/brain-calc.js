import * as url from 'node:url';
import runGame from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const description = 'What is the result of the expression?';

const calc = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Sorry, this ${symbol} is not available`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operators = ['*', '-', '+'];
  const getRandomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calc(num1, num2, getRandomOperator));
  const question = `${num1} ${getRandomOperator} ${num2}`;
  return [question, answer];
};

export default () => runGame(description, generateRound);

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    runGame(description, generateRound);
  }
}
