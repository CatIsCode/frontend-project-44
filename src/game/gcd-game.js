import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  let i = 0;
  let temp = 0;
  let correctAnswer;

  greeting();

  const userName = getName();

  console.log('Find the greatest common divisor of given numbers.');
  console.log('--------');

  while (i < 3) {
    let num1 = getRandomInt(1, 50);
    let num2 = getRandomInt(1, 50);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = getAnswer();

    if (num1 < num2) {
      temp = num1;
      num1 = num2;
      num2 = temp;
    }

    temp = num1 % num2;

    if (temp === 0) {
      correctAnswer = num2;
    }
    while (temp !== 0) {
      num1 = temp;
      temp = num2 % num1;
      num2 = num1;
      if (temp === 0) {
        correctAnswer = num1;
      }
    }

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};
