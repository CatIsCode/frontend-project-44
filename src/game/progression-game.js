import getGenLogic, { getRandomInt } from '../index.js';

const descr = 'What number is missing in the progression?';

const getQA = () => {
  const step = getRandomInt(1, 7);
  let num1 = getRandomInt(1, 50);
  const arr = [num1];

  for (let j = 0; j < 10; j += 1) {
    num1 += step;
    arr.push(num1);
  }

  const correctAnswer = String(arr.splice(getRandomInt(0, 9), 1, '..'));
  const question = `${arr.join(' ')}`;
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQA);
};
