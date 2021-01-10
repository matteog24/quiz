// questions
// option 0 = Math, option 1 = General Culture, option 2 = Computer Science

// option 0 -> difficulty 0
const questionsOption0 = [
  'What is 10/2?', 
  'What is 30*3?',
  'What is 12^2?', 
  'What is the square root of 4?',
  'What is -12 - 5?'
];
    
const avalibleAnswersOption0 = [
  ['5', '2', '3', '10'],
  ['14', '82', '90', '20'],
  ['24', '2', '6', '144'],
  ['4', '7', '2', '16'],
  ['17', '-17', '0', '12']
];
    
const correctAnswersOption0 = [
  0,
  2,
  3,
  2,
  1
];

// option 0 -> difficulty 1
const questionsOption0Difficulty1 = [
  'Each of 6 rows has the same number of seats. If there are a total of 42 seats, how many are in each row?',
  'Each member of a club raised $65 in a fundraiser. If there are 7 members, how much money was raised?',
  'What is the square root of 49?',
  'What is the value of Pi?',
  'Solve for x -> 46 = 5x + 6'
];

const avalibleAnswersOption0Difficulty1 = [
  ['7', '8', '36', '48'],
  ['$72', '$425', '$455', '$485'],
  ['16', '45', '12', '7'],
  ['3.14', '2.75', '1.41', '5.19'],
  ['4', '7', '8', '9']
];

const correctAnswersOption0Difficulty1 = [
  0,
  2,
  3,
  0,
  2
];

// option 0 -> difficulty 2
const questionsOption0Difficulty2 = [
  'Find the range for the following data.  4, 5, 8, 10, 12, 9, 6, 5, 11',
  'Which is the most reasonable estimate for 6 x 379?',
  '_____ feet is 1 cm',
  '5400 divided by 90 is?',
  'What happens to the area of a rectangle when you double the length of both sides?'
];

const avalibleAnswersOption0Difficulty2 = [
  ['12', '10', '8', '6'],
  ['180', '240', '1800', '2400'],
  ['1', '0.03', '0.07', '0.5'],
  ['6', '60', '600', '6000'],
  ['Area is 2x', 'Area is 4x', 'Area is 6x', 'Area is 8x']
];

const correctAnswersOption0Difficulty2 = [
  2,
  3,
  1,
  1,
  1
];


// option 1 -> difficulty 0
const questionsOption1 = [
  'What are the primary colors?',
  'How many prime numbers do exist?',
  'How many states are there in the EU?',
  'In which year was Joan of Arc burned at the stake?',
  'On what subject was the first referendum in Britain?'
];
      
const avalibleAnswersOption1 = [
  ['Yellow, Blue and Red', 'Green, Blue and Black', 'Green, Orange and Purple'],
  ['25', '7', 'None', 'Infinite'],
  ['16', '51', '27', '8'],
  ['1431', '1530', '1735', '1323'],
  ['EU','Joining the EEC', 'Brexit', 'Exiting the EEC']
];
    

const correctAnswersOption1 = [
  1,
  3,
  2,
  0,
  1
];

// option 1 -> difficulty 1
const questionsOption1Difficulty1 = [
  'Which of these songs has been made by LMFAO?',
  'Where does the Wimbledon tennis tournament take place?',
  'What Celsius temperature does water boil at?',
  'The Playstation2 has been released in North America in ________.',
  'The movies "Avatar" and "Titanic" have been realized by ________.'
];

const avalibleAnswersOption1Difficulty1 = [
  ['Memories', 'Party Rock Anthem', 'Tik Tok', 'E.T.'],
  ['Dallas', 'Paris', 'London', 'New York'],
  ['100', '90', '87', '110'],
  ['1999', '2000', '2001', '2002'],
  ['Steven Spielberg', 'Christopher Nolan', 'Harrison Ford', 'James Cameron']
];

const correctAnswersOption1Difficulty1 = [
  1,
  2,
  0,
  1,
  3
];

// option 1 -> difficulty 2
const questionsOption1Difficulty2 = [
  'When was the Wii discontinued?',
  'Where was Ed Sheeran born?',
  'What is the capital of Estonia?',
  'What fundamental force is responsible for the spherical shape of Earth?',
  'The largest bird in North America is the California ________.'
];

const avalibleAnswersOption1Difficulty2 = [
  ['2008', '2010', '2012', '2013'],
  ['USA', 'England', 'Scotland', 'Australia'],
  ['Vilnius', 'Minsk', 'Tallinn', 'Riga'],
  ['Centrifugal', 'Angular momentum', 'Gravity', 'Earth is flat'],
  ['Condor', 'Eagle', 'Turkey', 'Ostrich']
];

const correctAnswersOption1Difficulty2 = [
  3,
  1,
  2,
  2,
  0
];


// option 2 -> difficulty 0
const questionsOption2 = [
  'A precise sequence of instructions for processes that can be executed by a computer?',
  'Finding and fixing problems in an algorithm or program.',
  '_____  are actions an object can do',
  'The brains of the computer where most calculations take place.',
  '_____ is a way of repeating code'
];
      
const avalibleAnswersOption2 = [
  ['Loop', 'Algorithm', 'Variable', 'Array'],
  ['Bug', 'Toolkit', 'Debug', 'Problem Solving'],
  ['Class', 'Functions', 'Constant', 'Strings'],
  ['CPU', 'Terminal', 'RAM', 'GPU'],
  ['If statement', 'Functions', 'Repeat', 'Loop']
];
      
const correctAnswersOption2 = [
  1,
  2,
  1,
  0,
  3
];

// option 2 -> difficulty 1
const questionsOption2Difficulty1 = [
  'What makes Linux special?',
  'Information that is broken down into small chunks before it is sent to another computer are called ________.',
  'Everything physical in a computer is attached to the',
  'What does HTML stand for?',
  'Which type is incorrect?'
];

const avalibleAnswersOption2Difficulty1 = [
  ['Privacy', 'Free and Open-Source', 'Simple and Easy to use', 'Light-weight'],
  ['Letters', 'Packets', 'Messages', 'Packages'],
  ['Hard disk', 'CPU', 'Memory', 'Motherboard'],
  ['Hyper Trainer Marking Language', 'Hyper Text Marketing Language', 'Hyper Text Markup Language', 'Hyper Text Markup Leveler'],
  ['Double', 'Float', 'Array', 'Int']
];

const correctAnswersOption2Difficulty1 = [
  1,
  1,
  3,
  2,
  2
];

// option 2 -> difficulty 2
const questionsOption2Difficulty2 = [
  'Every Network Interface Card has a _______ address, which is a unique identifier.',
  'The symbol that represents comments in a flowchart is _______.',
  '________ represent algorithms that involve complex decision-making.',
  'What do shell windows show?',
  'What is the most complicated language?'
];

const avalibleAnswersOption2Difficulty2 = [
  ['GUI', 'MAC', 'NIC', 'CPU'],
  ['A procedure symbol', 'An annotation symbol', 'A flow line', 'A subroutine'],
  ['Flowchart', 'Pseudocode', 'Programs', 'Decision tables'],
  ['Code', 'console.log command', 'Program output', 'IDLE'],
  ['Actionscript', 'C', 'C#.NET', 'C++']
];

const correctAnswersOption2Difficulty2 = [
  1,
  1,
  3,
  2,
  3
];


module.exports = {
  questionsOption0,
  questionsOption0Difficulty1,
  questionsOption0Difficulty2,
  questionsOption1,
  questionsOption1Difficulty1,
  questionsOption1Difficulty2,
  questionsOption2,
  questionsOption2Difficulty1,
  questionsOption2Difficulty2,

  avalibleAnswersOption0,
  avalibleAnswersOption0Difficulty1,
  avalibleAnswersOption0Difficulty2,
  avalibleAnswersOption1,
  avalibleAnswersOption1Difficulty1,
  avalibleAnswersOption1Difficulty2,
  avalibleAnswersOption2,
  avalibleAnswersOption2Difficulty1,
  avalibleAnswersOption2Difficulty2,

  correctAnswersOption0,
  correctAnswersOption0Difficulty1,
  correctAnswersOption0Difficulty2,
  correctAnswersOption1,
  correctAnswersOption1Difficulty1,
  correctAnswersOption1Difficulty2,
  correctAnswersOption2,
  correctAnswersOption2Difficulty1,
  correctAnswersOption2Difficulty2
}
