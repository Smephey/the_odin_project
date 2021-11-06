function capitalize(word) {
	return word.toUpperCase();
}

function reverseString(string) {
	return [...string].reverse().join('');
}

const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => {
		return b === 0 ? null : a / b;
	},
	multiply: (a, b) => a * b,
};

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
