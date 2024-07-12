import getGenLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const descr = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  let answer;
  let temp = 0;
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }

  temp = a % b;

  if (temp === 0) {
    answer = b;
  }
  while (temp !== 0) {
    a = temp;
    temp = b % a;
    b = a;
    if (temp === 0) {
      answer = a;
    }
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);

  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQuestionAndAnswer);
};
