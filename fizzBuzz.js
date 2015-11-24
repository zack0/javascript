/*

for (i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 != 0) {
		console.log('Fizz ' + i + ' is divisible by 3 but not by 5');
	} else if (i % 5 === 0 && i % 3 != 0) {
		console.log('Buzz ' + i + ' is divisible by 5 but not by 3');
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz ' + i + ' is divisible by both 3 and 5');
	}
	else console.log(i);
}

*/

var i = 0;
while (i <= 100) {
	i % 3 === 0 && i % 5 != 0 ? console.log('Fizz') 
	: i % 5 === 0 && i % 3 != 0 ? console.log('Buzz')
	: i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') 
	: console.log(i);
	i++;
}
