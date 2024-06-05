import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  greeting();

  const userName = getName();
  let i = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('--------');

  do {
    const question = getRandomInt(1, 50);
    console.log(`Question: ${question}`);

    const userAnswer = getAnswer();

    if ((userAnswer !== 'yes') && (userAnswer !== 'no')) {
      console.log(`"${userAnswer}" is wrong answer.`);
      console.log('Correct answer "yes" if the number is even, otherwise answer "no".');
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if ((question % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    }
    if ((question % 2 !== 0) && (userAnswer === 'yes')) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if ((question % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    }
    if ((question % 2 === 0) && (userAnswer === 'no')) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  } while (i < 3);
};
