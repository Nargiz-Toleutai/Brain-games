import readlineSync from 'readline-sync';

const isEven = (n) => n % 2 === 0;

// const isOdd = (n) => Math.abs(n % 2) === 1;

const loop = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(number) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(number) && answer === 'no') {
      console.log('Correct!');
    } else if (isEven(number) && answer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      return;
    } else if (!isEven(number) && answer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const app = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  loop(name);
};

export default app;
