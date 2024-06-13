import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const separator = () => {
  console.log('--------');
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

export default (descr, getQA) => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(descr);
  separator();

  while (i < 3) {
    const [question, correctAnswer] = getQA();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
      separator();
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};
