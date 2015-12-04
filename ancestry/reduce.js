var colors = require('colors');
ANCESTRY = require('./data.js');

var ancestry = JSON.parse(ANCESTRY);

function reduce(array, combine, start) {
	var current = start;
	for (var i = 0; i < array.length; i++)
		current = combine(current, array[i]);
	return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
	return a + b;
}, 0));