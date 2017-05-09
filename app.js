'use strict'

// greeting
alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');

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
} else {
  alert('Hey, man. You never know.');
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
} else {
  alert('Matthew only wishes you were correct. Matthew eats too many potato chips.');
}

//question 5
var bird = prompt('Final Question: Is Eric Andre Matthew\'s favorite comedian?').toUpperCase();
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
}

// goodbye message
alert('That was fun! Now you\'ve learned a little bit about Matthew!');
