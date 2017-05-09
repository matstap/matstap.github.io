'use strict'

alert('Hi, there! Let\'s play a yes/no guessing game about Matthew.');

var shoes = prompt('Question 1: Does Matthew own more than 5 pairs of shoes?');
console.log('shoe guess:', shoes);
var shoesUpper = shoes.toUpperCase();

// give different alert for YES/Y, NO/N, and undefined answers
if (shoesUpper === 'YES' || shoesUpper === 'Y') {
  alert('Ouch! Sorry, that\'s incorrect! He only has 4 pairs.');
} else if (shoesUpper === 'NO' || shoesUpper === 'N') {
  alert('Correct! Matthew has 3 pairs of shoes.');
} else {
  alert('I can\'t understand you... Everything okay? Let\'s just move on.');
}
