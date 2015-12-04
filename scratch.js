fs = require('fs');

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

/*
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
*/

/*
(function() {
	var a = b = 5;
})();
console.log(b);
*/

/*
function repeatify(i, s) {
	var rpt = i;
	var str = s.toString();
	for (i = 0; i < rpt; i++)
	{
		console.log(str);
	}
}
console.log(repeatify(3, 'hello'));
*/

/*
function printRepeatify (str) {
	//str = str;
	console.log(str);
	String.prototype.repeatify = String.prototype.repeatify || function(times) {
			
		for (var i = 0; i < times; i++) {
			str += this;
		}
		return str;
	}	
}
console.log(printRepeatify('hello'));
*/

/*
(function text() {
	console.log(a);
	console.log(foo());
	var a = 1;
	function foo() {
		return 1;
	}
});
*/

/*
var stkPrices = [10, 7, 5, 8, 11, 9];

var newStkPrices = stkPrices.reduce(function(previousVal, currentVal) {
	return previousVal - currentVal;
}, 0);

console.log(newStkPrices);
*/

/*
var stkPrices = [10, 7, 5, 8, 11, 9];
stkPrices.reverse();

for (i = 0; i < stkPrices; i++) {
		
}
*/

// Palindrome
/*
function palindrome(str) {
  var string = str.toString().replace(/[^a-zA-Z0-9]/g,"").replace(" ", "").toLowerCase();
	console.log(string);
	
	var revString = string.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g,"").replace(" ", "").toLowerCase();
	console.log(revString);
	
  if (string === revString) {
    return true;
  } else {
    return false;  
  }
}

console.log(palindrome("never odd or even"));
*/

// Find longest word

/*
function findLongestWord(str) {
	
	var strArray = str.split(" ");
	
	sortStrArray = strArray.sort(function(a, b) {
	 return a.length > b.length;	
	});	
		
	var lngStr = sortStrArray.pop();
	// console.log(sortStrArray);
	// console.log(lngStr);
  return lngStr.length;
	console.log(lngStr.length);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
*/

// Title Case

function titleCase(str) {
	console.log(str);
	var words = str.split(" ");
	console.log(words);
	
	tcWords = words.map(function(val) {
		val.charAt(0).toUpperCase();
		console.log(tcWords);
	}	
}

console.log(titleCase("I'm a little tea pot"));
