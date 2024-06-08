import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  greeting();

  const userName = getName();
  let correctAnswer;
  let i = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('--------');

  while (i < 3) {
    const question = getRandomInt(1, 50);
    console.log(`Question: ${question}`);

    if (question % 2 === 0) correctAnswer = 'yes';
    else {
      correctAnswer = 'no';
    }
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
