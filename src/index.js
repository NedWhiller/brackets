module.exports = function check(str, bracketsConfig) {
	let brackets = [],
		currentStr = str;

	bracketsConfig.forEach(function(item, i) {
		brackets[i] = item.join('');
	})

	for (var i = 0; i < brackets.length;) {

		if (currentStr.indexOf(brackets[i]) !== -1) {
			currentStr = currentStr.replace(brackets[i], '');
			i = 0;
			
		} else {
			i += 1;
		}
	}

	return currentStr == '' ? true : false;
}
