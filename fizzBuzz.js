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
var i = 0;

fizzBuzz();

function fizzBuzz() {
	while (i <= 100) {
		i % 3 === 0 && i % 5 != 0 ? console.log('Fizz') 
		: i % 5 === 0 && i % 3 != 0 ? console.log('Buzz')
		: i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') 
		: console.log(i);
		i++;
	}
};
// */


