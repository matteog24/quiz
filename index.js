// input
const input = require('input');
const utils = require('./utils')
const avalibleSubject = ['Maths', 'General Culture', 'Computer Science'];
const avalibleDifficulties = ['Easy', 'Medium', 'Hard'];
let questions = [];
let avalibleAnswers = [];
let correctAnswers = [];
let userSubject = '';
const correct = ['Yes! Bravo!', 'Correct! Keep it up!', 'Well done!', 'Great!'];
const wrong = ['Incorrect!', 'Wrong! Keep working!', 'Better luck next time!', 'Ops... think twice before answring!'];



// function
async function main() {

  console.log('\x1b[44m%s\x1b[0m', 'Welcome to Quiz Game! To play, follow the on-screen instructions!')
  console.log()


  // choosing difficulty
  console.log('\x1b[36m%s\x1b[0m', 'Choose the difficulty');
  for (let b = 0; b < avalibleDifficulties.length; b = b + 1) {
    const currentDifficulty = avalibleDifficulties[b];
    console.log('Option ' + (b + 1) + '. ' + currentDifficulty);
  }
  const userDifficulty = (await input.readInteger('Your difficulty choice') - 1);
  if (userDifficulty > parseInt('2')) {
    console.log('\x1b[41m%s\x1b[0m', 'Value outside of range, type node index.js to try again.')
    return;
  }


  // asking the user if s/he wants to choose the subject
  console.log('\x1b[44m%s\x1b[0m', 'Type 1 for choosing a subject (5 questions) or 2 if you do not want (15 questions)');
  const subjectYesOrNo = await input.readInteger('Your choice');
  if (subjectYesOrNo > parseInt('2')) {
    console.log('\x1b[41m%s\x1b[0m', 'Value outside of range, type node index.js to try again.')
    return;
  }


  if (subjectYesOrNo == '1') {
    // choosing subject
    console.log('\x1b[36m%s\x1b[0m', 'Choose the subject');
    for (let a = 0; a < avalibleSubject.length; a = a + 1) {
      const currentSubject = avalibleSubject[a];
      console.log('Option ' + (a + 1) + '. ' + currentSubject);
    }

    const userSubjectChoice = (await input.readInteger('Your subject choice') - 1);
    userSubject = userSubjectChoice;
    if (userSubject > parseInt('2')) {
      console.log('\x1b[41m%s\x1b[0m', 'Value outside of range, type node index.js to try again.')
      return;
    }
  }
  else if (subjectYesOrNo == '2') {
    console.log('More questions, huh? Show us your skills!');
    assinging15Questions(userDifficulty, questions);
  }

  // assinging the questions based on the subject
  // userSubject is 0
  if (userSubject == '0') {
    if (userDifficulty == '0') {
      questions = utils.questionsOption0;
      avalibleAnswers = utils.avalibleAnswersOption0;
      correctAnswers = utils.correctAnswersOption0;
    }
    else if (userDifficulty == '1') {
      questions = utils.questionsOption0Difficulty1;
      avalibleAnswers = utils.avalibleAnswersOption0Difficulty1;
      correctAnswers = utils.correctAnswersOption0Difficulty1;
    }
    else if (userDifficulty == '2') {
      questions = utils.questionsOption0Difficulty2;
      avalibleAnswers = utils.avalibleAnswersOption0Difficulty2;
      correctAnswers = utils.correctAnswersOption0Difficulty2;
    }

  }

  // userSubject is 1
  else if (userSubject == '1') {
    if (userDifficulty == '0') {
      questions = utils.questionsOption1;
      avalibleAnswers = utils.avalibleAnswersOption1;
      correctAnswers = utils.correctAnswersOption1;
    }
    else if (userDifficulty == '1') {
      questions = utils.questionsOption1Difficulty1;
      avalibleAnswers = utils.avalibleAnswersOption1Difficulty1;
      correctAnswers = utils.correctAnswersOption1Difficulty1;
    }
    else if (userDifficulty == '2') {
      questions = utils.questionsOption1Difficulty2;
      avalibleAnswers = utils.avalibleAnswersOption1Difficulty2;
      correctAnswers = utils.correctAnswersOption1Difficulty2;
    }

  }

  // userSubject is 2
  else if (userSubject == '2') {
    if (userDifficulty == '0') {
      questions = utils.questionsOption2;
      avalibleAnswers = utils.avalibleAnswersOption2;
      correctAnswers = utils.correctAnswersOption2;
    }
    else if (userDifficulty == '1') {
      questions = utils.questionsOption2Difficulty1;
      avalibleAnswers = utils.avalibleAnswersOption2Difficulty1;
      correctAnswers = utils.correctAnswersOption2Difficulty1;
    }
    else if (userDifficulty == '2') {
      questions = utils.questionsOption2Difficulty2;
      avalibleAnswers = utils.avalibleAnswersOption2Difficulty2;
      correctAnswers = utils.correctAnswersOption2Difficulty2;
    }
  }

  let userPoints = 0;
  let userPointsMaths = 0;
  let userPointsGC = 0;
  let userPointsCS = 0;


  // printing the questions
  for (let i = 0; i < questions.length; i = i + 1) {
    const currentQuestion = questions[i];
    const currentAvailableAnswers = avalibleAnswers[i];

    console.log('\x1b[33m%s\x1b[0m', 'Question');
    console.log('\x1b[44m%s\x1b[0m', currentQuestion);
    console.log('\x1b[33m%s\x1b[0m', 'Avalible Answers');

    for (let j = 0; j < currentAvailableAnswers.length; j = j + 1) {
      const currentAnswer = currentAvailableAnswers[j];
      console.log('Option ' + (j + 1) + '. ' + currentAnswer);
    }

    let userAnswer = (await input.readInteger('Your answer') - 1);

    let a = Math.floor(Math.random() * 4);
    if (userAnswer === correctAnswers[i]) {
      console.log('\x1b[42m%s\x1b[0m', correct[a]);
      userPoints = userPoints + 10;
      if (subjectYesOrNo == '2') {
        if (questions.subject[i] == 'Math') {
          userPointsMaths = userPointsMaths + 10;
        }
        else if (questions.subject[i] == 'General Culture') {
          userPointsGC = userPointsGC + 10;
        }
        else if (questions.subject[i] == 'Computer Science') {
          userPointsCS = userPointsCS + 10;
        }
      }
    }
    else {
      console.log('\x1b[41m%s\x1b[0m', wrong[a]);
      console.log('\x1b[41m%s\x1b[0m', 'The correct option is ' + (correctAnswers[i] + 1))
    }

  }

  console.log('\x1b[40m%s\x1b[0m', 'You made ' + userPoints + ' points!');
  if (subjectYesOrNo == '2') {
    percentageOfSubjects(userPointsMaths, userPointsGC, userPointsCS);
  }

  convertMark(userPoints, subjectYesOrNo);

  console.log();
  console.log('\x1b[32m%s\x1b[0m', 'Type node index.js to play again!');
}


// other functions

function assinging15Questions(userDifficulty, questions) {
  if (userDifficulty == '0') {
    questions.push(...utils.questionsOption0, ...utils.questionsOption1, ...utils.questionsOption2);
    avalibleAnswers.push(...utils.avalibleAnswersOption0, ...utils.avalibleAnswersOption1, ...utils.avalibleAnswersOption2);
    correctAnswers.push(...utils.correctAnswersOption0, ...utils.correctAnswersOption1, ...utils.correctAnswersOption2);
  }
  else if (userDifficulty == '1') {
    questions.push(...utils.questionsOption0Difficulty1, ...utils.questionsOption1Difficulty1, ...utils.questionsOption2Difficulty1);
    avalibleAnswers.push(...utils.avalibleAnswersOption0Difficulty1, ...utils.avalibleAnswersOption1Difficulty1, ...utils.avalibleAnswersOption2Difficulty1);
    correctAnswers.push(...utils.correctAnswersOption0Difficulty1, ...utils.correctAnswersOption1Difficulty1, ...utils.correctAnswersOption2Difficulty1);
  }
  else if (userDifficulty == '2') {
    questions.push(...utils.questionsOption0Difficulty2, ...utils.questionsOption1Difficulty2, ...utils.questionsOption2Difficulty2);
    avalibleAnswers.push(...utils.avalibleAnswersOption0Difficulty2, ...utils.avalibleAnswersOption1Difficulty2, ...utils.avalibleAnswersOption2Difficulty2);
    correctAnswers.push(...utils.correctAnswersOption0Difficulty2, ...utils.correctAnswersOption1Difficulty2, ...utils.correctAnswersOption2Difficulty2);
  }

  questions.subject = [];
  for (let a = 0; a < 15; a++) {
    if (a < 5) {
      questions.subject.push('Math');
    }
    else if (a < 10) {
      questions.subject.push('General Culture');
    }
    else if (a < 15) {
      questions.subject.push('Computer Science');
    }
  }

}


function convertMark(userPoints, subjectYesOrNo) {
  let percentageOfSuccess = 0;

  if (subjectYesOrNo == '2') {
    percentageOfSuccess = parseInt((userPoints * 100) / 150);
  }
  else {
    percentageOfSuccess = parseInt((userPoints * 100) / 50);
  }

  console.log('\x1b[45m%s\x1b[0m', 'Your percentage is ' + percentageOfSuccess + '%.');
  let mark = parseInt((percentageOfSuccess * 8) / 100);
  console.log('\x1b[45m%s\x1b[0m', 'Your mark is ' + mark + ' out of 8.');


  if (percentageOfSuccess <= 20) {
    console.log('Did you choose the answers randomly? Please, try harder next time...');
  }
  else if (percentageOfSuccess <= 60) {
    console.log('You could have done better!');
  }
  else {
    console.log('Great job!');
  }

}

function percentageOfSubjects(userPointsMaths, userPointsGC, userPointsCS) {
  let percentageMaths = parseInt((userPointsMaths * 100) / 50);
  let percentageGC = parseInt((userPointsGC * 100) / 50);
  let percentageCS = parseInt((userPointsCS * 100) / 50);

  console.log('\x1b[40m%s\x1b[0m', 'You did ' + userPointsMaths + ' points - ' + percentageMaths + '% - in Math.');
  console.log('\x1b[40m%s\x1b[0m', 'You did ' + userPointsGC + ' points - ' + percentageGC + '% -  in General Culture.');
  console.log('\x1b[40m%s\x1b[0m', 'You did ' + userPointsCS + ' points - ' + percentageCS + '% -  in Computer Science.');

}


// let the show... begin!
main();
