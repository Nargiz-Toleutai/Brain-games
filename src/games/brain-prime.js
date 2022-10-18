import runGame from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateRound = () => {
  const number = getRandomNumber(0, 50);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

export default () => runGame(description, generateRound);
