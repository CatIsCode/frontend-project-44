import getGenLogic, { getRandomInt } from '../index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  let correctAnswer;
  const question = getRandomInt(1, 50);
  const isEven = question % 2 === 0;
  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQA);
};
