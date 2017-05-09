'use strict'

alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');

var shoes = prompt('Question 1: Does Matthew own more than 5 pairs of shoes?');
console.log('shoe guess:', shoes);
var shoesUp = shoes.toUpperCase();

// give different alert for YES/Y, NO/N, and undefined answers
if (shoesUp === 'YES' || shoesUp === 'Y') {
  alert('Ouch! Sorry, that\'s incorrect! He only has 4 pairs.');
} else if (shoesUp === 'NO' || shoesUp === 'N') {
  alert('Correct! Matthew has 3 pairs of shoes.');
} else {
  alert('I can\'t understand you... Everything okay? Let\'s just move on.');
}

// add a maybe case
var married = prompt('Question 2: Is Matthew married?');
console.log('married guess', married);
var marriedUp = married.toUpperCase();

if (marriedUp === 'Y' || marriedUp === 'YES') {
  alert('Correct! Matthew has been married for a year come June.');
} else if ( marriedUp === 'N' || marriedUp === 'NO') {
  alert('Wrong! Matthew is married.');
} else if (marriedUp === 'MAYBE') {
  alert('No cheating! Now you will never know!') ;
} else {
  alert('Not an answer. Let\'s move on.');
}

var zebra = prompt('Question 3: Is Matthew a Zebra?');
console.log('zebra guess:', zebra);
var zebraUp = zebra.toUpperCase();

if (zebraUp === 'Y' || zebraUp === 'YES') {
  alert('Neither correct or incorrect. Zebra is a state of mind, friend.');
} else if (zebraUp === 'N' || zebraUp === 'NO') {
  alert('Hey, man. You never know.');
} else {
  alert('Incorrect answer type, friend! Let\'s move on.');
}
