'use strict'

alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');

// question 1
var shoes = prompt('Question 1: Does Matthew own more than 5 pairs of shoes?').toUpperCase();
console.log('shoe guess:', shoes);

// give different alert for YES/Y, NO/N, and undefined answers
// add while loops to make sure of valid answers
if (shoes === 'YES' || shoes === 'Y') {
  alert('Ouch! Sorry, that\'s incorrect! He only has 4 pairs.');
} else if (shoes === 'NO' || shoes === 'N') {
  alert('Correct! Matthew has 3 pairs of shoes.');
} else {
  alert('I can\'t understand you... Everything okay? Let\'s just move on.');
}

// question 2. add a maybe case
var married = prompt('Question 2: Is Matthew married?').toUpperCase();
console.log('married guess', married);

if (married === 'Y' || married === 'YES') {
  alert('Correct! Matthew has been married for a year come June.');
} else if ( married === 'N' || married === 'NO') {
  alert('Wrong! Matthew is married.');
} else if (married === 'MAYBE') {
  alert('No cheating! Now you will never know!') ;
} else {
  alert('Not an answer. Let\'s move on.');
}

// question 3
var zebra = prompt('Question 3: Is Matthew a Zebra?').toUpperCase();
console.log('zebra guess:', zebra);

if (zebra === 'Y' || zebra === 'YES') {
  alert('Neither correct or incorrect. Zebra is a state of mind, friend.');
} else if (zebra === 'N' || zebra === 'NO') {
  alert('Hey, man. You never know.');
} else {
  alert('Incorrect answer type, friend! Let\'s move on.');
}

// question 4
var chips = prompt('Question 4: Does Matthew like potato chips?').toUpperCase();
console.log('chips guess', chips);

if (chips === 'Y' || chips === 'YES') {
  alert('Yes! Matthew has an unhealthy love of potato chips!');
} else if (chips === 'N' || chips === 'NO') {
  alert('Matthew only wishes you were correct. Matthew eats too many potato chips.');
} else {
  alert('Incorrect answer type. Let\'s just ask the last question.');
}

//question 5
var bird = prompt('Final Question: Is Eric Andre Matthew\'s favorite comedian?').toUpperCase();
console.log('bird guess', bird);


if (bird === 'Y' || bird === 'YES') {
  alert('Incorrect! He\'s not Matthew\'s favorite comedian. But still, Bird Up!');
} else if (bird === 'N' || bird ==='NO') {
  alert('You\'re right! He\'s still funny though. Bird Up!!!');
} else {
  alert('Incorrect answer type. I think that\'s enogh fun for today.');
}
