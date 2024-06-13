import getGenLogic, { getRandomInt } from '../index.js';

const descr = 'What is the result of the expression?';

const getQA = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  let correctAnswer;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;

    case '-':
      correctAnswer = num1 - num2;
      break;

    case '*':
      correctAnswer = num1 * num2;
      break;

      // no default
  }
  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQA);
};
