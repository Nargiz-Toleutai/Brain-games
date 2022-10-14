import readlineSync from 'readline-sync';
import app from '../brain-even.js';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  app(userName);
};

export default cli;
