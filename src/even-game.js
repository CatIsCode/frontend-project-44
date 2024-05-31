import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('--------');

  function getRandomInt(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
  }

  let i = 0;

  do {
    const question = getRandomInt(1, 50);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer !== 'yes') && (userAnswer !== 'no')) {
      console.log(`"${userAnswer}" is wrong answer.`);
      console.log('Correct answer "yes" if the number is even, otherwise answer "no".');
      break;
    }

    if ((question % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    }
    if ((question % 2 !== 0) && (userAnswer === 'yes')) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if ((question % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
      console.log('--------');
      i += 1;
    }
    if ((question % 2 === 0) && (userAnswer === 'no')) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      console.log('--------');
      break;
    }
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  } while (i < 3);
};