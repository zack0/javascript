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

// Loop Array

/*
function titleCase(str) {
	var index;
	var text = "";
	var words = str.split(" ");
	for (index = 0; index < words.length; index++) {
		text += words[index] + " ";
	}
	return text;
	console.log(text);
}

console.log(titleCase("I'm a little tea pot"));

*/

// Title Case

//
// function titleCase(str) {
  // return str.replace(/\w\S*/g, function(txt) {
    // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  // });
// }

// console.log(titleCase("I'm a little tea pot"));

// Return Largest Number in Arrays

/*
function largestOfFour(arr) {
  var newArr = [];
  if (typeof(arr) == "object") {
    for (var i = 0; i < arr.length; i++) {
	  arr[i] = arr[i].sort(function(a, b) {
	    return a - b;
	  }); 
	var lof = arr[i].pop(0);
	newArr.push(lof);
	// console.log(arr[i]);
	// console.log(newArr);
	}
  }
arr = newArr;  
return arr;
}
	
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/

// Confirm End of String

/*
function end(str, target) {
	
  var tLength = target.length;
  var subStr = str.substr(-tLength);
    
  if (target == subStr) {
	console.log("%s does end with the same characters as %s", subStr, target);
	return true;
  } else if (target.toLowerCase() == subStr.toLowerCase()) {
	console.log("%s does end with the same letters as %s", subStr, target);
	return true;
  } else {
	console.log("%s does not end with any match to %s", subStr, target);
    return false;
  }
  
}

console.log(end("Bastian", "tiaN"));
*/

// Repeat String

/*
function repeat(str, num) {
  if (num < 0) {
	  return "";
  } else {
	str = str.repeat(num);
	return str;
  }
}

console.log(repeat("abc", 3));
*/

// Truncate String
/*
function truncate(str, num) {
  var endSlice = num - 3;
  if (str.length > num) {
	if (endSlice > 0) {
	  str = str.slice(0, endSlice).concat("...");
	  return str;	
	} else {
		str = str.slice(0, num).concat("...");
	    return str;
	}  
  } else {
	return str;  
  }
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", -2));
*/

// Chunky Monkey