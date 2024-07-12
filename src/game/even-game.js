import getGenLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQuestionAndAnswer);
};
