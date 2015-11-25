var colors = require('colors');
JOURNAL = require('./data.js');

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
						  (table[0] + table[1]) *
							(table[1] + table[3]) *
							(table[0] + table[2]));
}
// console.log(phi())

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);

// /*
for (var event in correlations)
console.log(event.toString().green + ": " + correlations[event].toString().rainbow);
// */

/*
for (var event in correlations) {
	var correlation = correlations[event];
	if (correlation > 0.1 || correlation < -0.1)
		console.log(event.toString().green + ": " + correlation.toString().rainbow);
}
*/