var colors = require('colors');
// if else else if
/*
for (i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 != 0) {
		console.log('Fizz');
	} else if (i % 5 === 0 && i % 3 != 0) {
		console.log('Buzz');
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	}
	else console.log(i);
}
*/

// while ternary
/*
var i = 0;
while (i <= 100) {
	i % 3 === 0 && i % 5 != 0 ? console.log('Fizz') 
	: i % 5 === 0 && i % 3 != 0 ? console.log('Buzz')
	: i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') 
	: console.log(i);
	i++;
}
*/

// function fizzBuzz
// /*
function fizzBuzz(i, z) {
	while (i <= z) {
		i % 3 === 0 && i % 5 != 0 ? console.log('Fizz') 
		: i % 5 === 0 && i % 3 != 0 ? console.log('Buzz')
		: i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') 
		: console.log(i);
		i++;
	}
};
fizzBuzz(1, 100);
// */


