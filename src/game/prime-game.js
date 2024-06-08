import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  greeting();

  const userName = getName();
  let i = 0;
  let correctAnswer;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('--------');

  while (i < 3) {
    const num = getRandomInt(2, 54);
    let sum = 0;

    for (let j = 0; j <= num; j += 1) {
      if (num % j === 0) sum += 1;
    }

    if (sum > 2) correctAnswer = 'no';
    else {
      correctAnswer = 'yes';
    }

    console.log(`Question: ${num}`);
    const userAnswer = getAnswer();

    if (correctAnswer === userAnswer) {
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
