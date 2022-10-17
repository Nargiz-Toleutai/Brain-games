import readlineSync from 'readline-sync';

const isEven = (n) => n % 2 === 0;

export const loop = () => {
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
  console.log('Congratulations!');
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// eslint-disable-next-line consistent-return
const getRandomExpression = (from, to) => {
  const operators = ['*', '-', '+'];
  let expression = '';
  let result = '';
  const a = rand(from, to);
  const b = to - a;
  for (let i = 0; i <= a; i += 1) {
    if (i !== a - 1) {
      for (const sign of operators) {
        expression += a + sign + b;
        result = expression;
        expression = '';
      }
      return result;
    }
  }
};

// eslint-disable-next-line consistent-return
const compute = (expr) => {
  if (expr.match(/[*]/g)) {
    const expressionElems = expr.split('*');
    return expressionElems.reduce((sum, value) => parseFloat(sum) * parseFloat(value));
  }
  if (expr.match(/[+]/g)) {
    const expressionElems = expr.split('+');
    return expressionElems.reduce((sum, value) => parseFloat(sum) + parseFloat(value));
  }
  if (expr.match(/[-]/g)) {
    const expressionElems = expr.split('-');
    return expressionElems.reduce((sum, value) => parseFloat(sum) - parseFloat(value));
  }
};

export const resultOfExpression = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const expr = getRandomExpression(1, 10);
    console.log(`Question: ${expr}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = compute(expr);
    if (parseFloat(answer) === correctAnswer) {
      console.log('Correct!');
    } else if (parseFloat(answer) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
