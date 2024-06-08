import greeting, { getName, getAnswer, getRandomInt } from '../index.js';

export default () => {
  greeting();

  let i = 0;

  const userName = getName();

  console.log('What number is missing in the progression?');
  console.log('--------');

  while (i < 3) {
    const step = getRandomInt(1, 7);
    let num1 = getRandomInt(1, 50);
    const arr = [num1];

    for (let j = 0; j < 10; j += 1) {
      num1 += step;
      arr.push(num1);
    }

    const correctAnswer = String(arr.splice(getRandomInt(0, 9), 1, '..'));

    console.log(`Question: ${arr.join(' ')}`);

    const userAnswer = getAnswer();

    if (userAnswer === correctAnswer) {
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
