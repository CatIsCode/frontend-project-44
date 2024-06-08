import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  greeting();

  const userName = getName();
  let i = 0;

  const operators = ['+', '-', '*'];

  console.log('What is the result of the expression?');
  console.log('--------');

  while (i < 3) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    let correctAnswer;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;

    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;

      case '-':
        correctAnswer = num1 - num2;
        break;

      case '*':
        correctAnswer = num1 * num2;
        break;

      // no default
    }
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};
