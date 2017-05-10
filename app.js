'use strict';

// greeting
alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');
var rightAnswers = 0;

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

// gimme question
if (zebra === 'Y' || zebra === 'YES') {
  alert('Neither correct or incorrect. Zebra is a state of mind, friend.');
  rightAnswers++;
} else {
  alert('Hey, man. You never know.');
  rightAnswers++;
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
  var bird = prompt('Final Question: Is Eric Andre Matthew\'s favorite comedian?').toUpperCase();
  console.log('bird guess:', bird);
}

if (bird === 'Y' || bird === 'YES') {
  alert('Incorrect! He\'s not Matthew\'s favorite comedian. But still, Bird Up!');
} else {
  alert('You\'re right! He\'s still funny though. Bird Up!!!');
  rightAnswers++;
}


// question 6, number guess game, 4 tries
var number;
var counter = 1;
// correct integer between 0 and 20
var correctNum = Math.floor(Math.random() * 21);

while (number !== correctNum && counter <= 4) {
  number = parseInt(prompt('What is Matthew\'s favorite number between 0 and 20?'));
  console.log('number guess', number);

  if (number < correctNum) {
    alert('Too low');
    counter++;
  } else if (number > correctNum) {
    alert('Too high');
    count++;
  } else if (number === NaN || number === null) {
    alert('Enter a number please. And sorry, that\'s one guess.');
    counter++;
  } else {
    alert('That\'s right! You guessed it in ' + counter + ' tries.');
    rightAnswers++;
    break;
  }
}

console.log('counter', counter);
if (counter > 4) {
  alert('Sorry! His favorite number is ' + correctNum);
}

// question 7, 4 correct answers, 6 tries
var hobbies = ['video games', 'hiking', 'cooking', 'saxophone'];
var answer;
counter = 1;
var flag = false;

while (counter <= 6) {
  answer = prompt('What is one of Matthew\'s hobbies?').toUpperCase();
  console.log('hobby guess:', answer);

  for (var i=0; i < hobbies.length; i++) {
    console.log('current hobby', stuff[i]);
    if (answer === stuff[i]) {
      alert('That\'s right!');
      flag = true;
      rightAnswers++;
      break;
    }
  }

  if (!flag) {
    alert('Try again!');
    counter++;
  }
}

if (counter > 6) {
  alert('Sorry, you didn\'t get it!');
}
alert('Matthew\'s hobbies are:', hobbies);


// goodbye message
alert('That was fun! Now you\'ve learned a little bit about Matthew! You got ' + rightAnswers + ' correct!');
