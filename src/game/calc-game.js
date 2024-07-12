import getGenLogic from '../index.js';
import getRandomInt from '../getRandomInt.js';

const descr = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return operator;
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      return false;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = getOperator();

  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = calculate(num1, operator, num2);

  return [question, correctAnswer];
};

export default () => {
  getGenLogic(descr, getQuestionAndAnswer);
};
