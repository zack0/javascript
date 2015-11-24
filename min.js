function min(one, two) {
	if (one > two) {
		return one;
	} else if (one === two) {
		return one + ' and ' + two + ' are equal';
	} else return two;
}

console.log(min(10, 10));