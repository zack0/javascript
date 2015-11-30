/*
var y = 1;
if (function f(){}) {
	y += typeof f;
}

console.log(y);
*/

/*
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees);
console.log(trees[3]);
*/

var bar = true;
console.log(bar + 0);
var bar = true;
console.log(bar += 0);
var bar = true;
console.log(bar + "xyz");
var bar = true;
console.log(bar += "xyz");
var bar = true;
console.log(bar + true);
var bar = true;
console.log(bar += true);
var bar = true;
console.log(bar + false);
var bar = true;
console.log(bar += false);
var bar = true;
console.log(bar + 1);
var bar = true;
console.log(bar += 1);
var bar = true;
console.log(bar - 1);
var bar = true;
console.log(bar -= 1);