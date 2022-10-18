import runGame from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const description = 'Find the greatest common divisor of given numbers';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => runGame(description, generateRound);
