import getGenLogic, { getRandomInt } from '../index.js';

const descr = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  let temp = 0;
  let correctAnswer;

  let num1 = getRandomInt(1, 50);
  let num2 = getRandomInt(1, 50);

  const question = `${num1} ${num2}`;

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
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQA);
};
