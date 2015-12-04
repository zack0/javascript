var colors = require('colors');
ANCESTRY = require('./data.js');

var ancestry = JSON.parse(ANCESTRY);

console.log(ancestry.length);

function filter(array, test) {
 var passed = [];
  for (var i = 0; i < array.length; i++) {
   if (test(array[i]))
    passed.push(array[i]);
  }
  return passed;
}

console.log(JSON.stringify(filter(ancestry, function(person) {
 return person.born > 1900 && person.born < 1925;
})).replace(/},/g, "},\n").replace(/,/g, ",\n\t").rainbow);

/*
console.log(ancestry.filter(function(person)) {
 return person.father == "Carel Haverbeke";
});
*/