'use strict';

// still need to put questions in array

// greeting
alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');
var rightAnswers = 0;

var entries = [
  'Question 1: Does Matthew own more than 5 pairs of shoes?',
  'Question 2: Is Matthew married?',
  'Question 3: Is Matthew a Zebra?',
  'Question 4: Does Matthew like potato chips?',
  'Question 5: Is Eric Andre Matthew\'s favorite comedian?',
  'Question 6: What is Matthew\'s favorite number between 0 and 20?',
  'Question 7: What is one of Matthew\'s hobbies?'
];

var correct = [
  'N',
  'Y',
  'Y',
  'Y',
  'N',
  Math.floor(Math.random() * 21),
  ['video games', 'hiking', 'cooking', 'saxophone']
];

var responses = [
  'He only has 4 pairs.',
  'Matthew has been married for a year come June.',
  'Neither correct or incorrect. Zebra is a state of mind, friend.',
  'Matthew has an unhealthy love of potato chips!',
  'He\'s still funny though. Bird Up!!!'
];

function quest15(entry, correct, response) {
  var answer = prompt(entry).toUpperCase();
  console.log('guess:', answer);

  // give different alert for YES/Y, NO/N, and undefined answers
  // while loops to make sure of valid answers
  while (answer!== 'YES' && answer !== 'Y' && answer !== 'N' && answer !== 'NO') {
    alert('Let\'s try that again.');
    answer = prompt(entry).toUpperCase();
    console.log('answer guess:', answer);
  }

  if (answer.charAt[0] !== correct) {
    alert('Ouch! Sorry, that\'s incorrect! ' + response);
    return 0;
  } else {
    alert('Correct! ' + response);
    return 1;
  }
}

for (var i=0; i < entries.length; i++) {
  rightAnswers += quest15(entries[i], correct[i], responses[i]);
}

/*
// question 1
var shoes = prompt('Question 1: Does Matthew own more than 5 pairs of shoes?').toUpperCase();
console.log('shoe guess:', shoes);
// give different alert for YES/Y, NO/N, and undefined answers
// while loops to make sure of valid answers
while (shoes !== 'YES' && shoes !== 'Y' && shoes !== 'N' && shoes !== 'NO') {
  alert('Let\'s try that again.');
  shoes = prompt('Question 1: Does Matthew own more than 5 pairs of shoes?').toUpperCase();
  console.log('shoe guess:', shoes);
}
if (shoes === 'YES' || shoes === 'Y') {
  alert('Ouch! Sorry, that\'s incorrect! He only has 4 pairs.');
} else {
  alert('Correct! Matthew has 3 pairs of shoes.');
  rightAnswers++;
}
// question 2.
var married = prompt('Question 2: Is Matthew married?').toUpperCase();
console.log('married guess:', married);
while (married !== 'Y' && married !== 'YES' && married !== 'N' && married !== 'NO') {
  alert('Let\'s try that again.');
  married = prompt('Question 2: Is Matthew married?').toUpperCase();
  console.log('married guess:', married);
}
if (married === 'Y' || married === 'YES') {
  alert('Correct! Matthew has been married for a year come June.');
  rightAnswers++;
} else {
  alert('Wrong! Matthew is married.');
}
// question 3
var zebra = prompt('Question 3: Is Matthew a Zebra?').toUpperCase();
console.log('zebra guess:', zebra);
while (zebra !== 'Y' && zebra !== 'YES' && zebra !== 'N' && zebra !== 'NO'){
  alert('Let\'s try that again.');
  zebra = prompt('Question 3: Is Matthew a Zebra?').toUpperCase();
  console.log('zebra guess:', zebra);
}
if (zebra === 'Y' || zebra === 'YES') {
  alert('Neither correct or incorrect. Zebra is a state of mind, friend.');
  rightAnswers++;
} else {
  alert('Hey, man. You never know. Let\'s say... No point!');
}
// question 4
var chips = prompt('Question 4: Does Matthew like potato chips?').toUpperCase();
console.log('chips guess:', chips);
while (chips !== 'Y' && chips !== 'YES' && chips !== 'N' && chips !== 'NO') {
  alert('Let\'s try that again');
  chips = prompt('Question 4: Does Matthew like potato chips?').toUpperCase();
  console.log('chips guess', chips);
}
if (chips === 'Y' || chips === 'YES') {
  alert('Yes! Matthew has an unhealthy love of potato chips!');
  rightAnswers++;
} else {
  alert('Matthew only wishes you were correct. Matthew eats too many potato chips.');
}
//question 5
var bird = prompt('Question 5: Is Eric Andre Matthew\'s favorite comedian?').toUpperCase();
console.log('bird guess:', bird);
while (bird !== 'Y' && bird !== 'YES' && bird !== 'N' && bird !== 'NO') {
  alert('Let\'s try that again.');
  bird = prompt('Final Question: Is Eric Andre Matthew\'s favorite comedian?').toUpperCase();
  console.log('bird guess:', bird);
}
if (bird === 'Y' || bird === 'YES') {
  alert('Incorrect! He\'s not Matthew\'s favorite comedian. But still, Bird Up!');
} else {
  alert('You\'re right! He\'s still funny though. Bird Up!!!');
  rightAnswers++;
}
*/


// question 6, number guess game, 4 tries


function numGame(entry, correct,itr) {
  var number;
  var counter = 1;
  while (number !== correct && counter <= itr) {
    number = parseInt(prompt(entry));
    console.log('number guess', number);
    console.log('counter', counter);

    if (number < correct) {
      alert('Too low');
      counter++;
    } else if (number > correct) {
      alert('Too high');
      counter++;
    } else if (number === NaN || number === null) {
      alert('Enter a number please. And sorry, that\'s one guess.');
      counter++;
    } else {
      alert('That\'s right! You guessed it in ' + counter + ' tries.');
      return 1;
    }

  }
  alert('You\'re out of guesses.');
  return 0;
}

//Question 6
correctAnswers += numGame(entries[5], correct[5], 4);


function multChoice(entry, correct, itr) {
  var answer;
  var count = 1;

  while (count <= 6) {
    answer = prompt(entry);
    console.log('guess:', answer);
    console.log('count', count);

    for (var i=0; i < entry.length; i++) {
      console.log('current entry', entry[i]);
      if (answer === entry[i]) {
        alert('That\'s right!');
        return 1;
      }
    }


    alert('Try again!');
    count++;
  }

  console.log('count', count);


  alert('Sorry, you didn\'t get it!');
  alert('The correct answers are: ' + entry[0] + ', ' + entry[1] + ', ' + entry[2] + ', ' + entry[3]);
  return 0;
}

// question 7, 4 correct answers, 6 tries
rightAnswers += multChoice(entries[6], correct[6], 6);

// goodbye message
alert('That was fun! Now you\'ve learned a little bit about Matthew! You got ' + rightAnswers + ' of 7 correct!');
