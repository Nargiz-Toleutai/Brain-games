import readlineSync from 'readline-sync';
import even from '../brain-even.js';
import calc from '../brain-calc.js';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  even(userName);
  calc(userName);
};

export default cli;
