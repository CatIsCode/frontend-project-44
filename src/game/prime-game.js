import getGenLogic, { getRandomInt } from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  let correctAnswer;

  const num = getRandomInt(2, 54);
  let sum = 0;

  for (let j = 0; j <= num; j += 1) {
    if (num % j === 0) sum += 1;
  }

  if (sum > 2) correctAnswer = 'no';
  else {
    correctAnswer = 'yes';
  }

  const question = `${num}`;
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQA);
};
