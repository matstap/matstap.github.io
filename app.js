'use strict';

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

  if (answer.charAt(0) !== correct) {
    alert('Ouch! Sorry, that\'s incorrect! ' + response);
    return 0;
  } else {
    alert('Correct! ' + response);
    return 1;
  }
}

for (var i=0; i < 5; i++) {
  rightAnswers += quest15(entries[i], correct[i], responses[i]);
}

// question 6, number guess game, 4 tries
function numGame(entry, correct, itr) {
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
    } else if ( isNaN(number) || number === null) {
      alert('Enter a number please. And sorry, that\'s one guess.');
      counter++;
    } else {
      alert('That\'s right! You guessed it in ' + counter + ' tries.');
      return 1;
    }

  }
  alert('You\'re out of guesses. His favorite number is ' + correct);
  return 0;
}

//Question 6
rightAnswers += numGame(entries[5], correct[5], 4);


function multChoice(entry, correct, itr) {
  var answer;
  var count = 1;

  while (count <= itr) {
    answer = prompt(entry);
    console.log('guess:', answer);
    console.log('count', count);

    for (var i=0; i < entry.length; i++) {
      console.log('current:', correct[i]);
      if (answer === correct[i]) {
        alert('That\'s right!');
        return 1;
      }
    }

    alert('Try again!');
    count++;
  }

  console.log('count', count);
  alert('Sorry, you didn\'t get it! The correct answers are: ' + correct.toString());
  return 0;
}

// question 7, 4 correct answers, 6 tries
rightAnswers += multChoice(entries[6], correct[6], 6);

// goodbye message
alert('That was fun! Now you\'ve learned a little bit about Matthew! You got ' + rightAnswers + ' of 7 correct!');
