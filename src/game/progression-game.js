import getGenLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const descr = 'What number is missing in the progression?';

const getArr = () => {
  const step = getRandomInt(1, 7);
  let num1 = getRandomInt(1, 50);
  const arr = [num1];

  for (let j = 0; j < 10; j += 1) {
    num1 += step;
    arr.push(num1);
  }
  return arr;
};

const getQuestionAndAnswer = () => {
  const array = getArr();
  const correctAnswer = String(array.splice(getRandomInt(0, 9), 1, '..'));
  const question = `${array.join(' ')}`;

  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQuestionAndAnswer);
};
