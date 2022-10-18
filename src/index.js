import readlineSync from 'readline-sync';
import cli from './cli.js';

export const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random()
    * (max + 1 - min));

const roundCount = 3;

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = cli();

  if (description) console.log(description);
  if (!generateRound) return;

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
