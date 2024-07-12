import getGenLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getSum = (num) => {
  let i = 0;

  for (let j = 0; j <= num; j += 1) {
    if (num % j === 0) i += 1;
  }
  return i;
};

const getQuestionAndAnswer = () => {
  let correctAnswer;
  const num = getRandomInt(2, 54);
  const sum = getSum(num);

  if (sum > 2) correctAnswer = 'no';
  else {
    correctAnswer = 'yes';
  }

  const question = `${num}`;
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQuestionAndAnswer);
};
