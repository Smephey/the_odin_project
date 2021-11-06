const { test, expect } = require('@jest/globals');
const index = require('./index');

test('capitalise string', () => {
	expect(index.capitalize('hello')).toBe('HELLO');
});

test('reverse string', () => {
	expect(index.reverseString('dog')).toBe('god');
});

test('calc.add', () => {
	expect(index.calculator.add(5, 6)).toBe(11);
});

test('calc.subtract', () => {
	expect(index.calculator.subtract(19, 6)).toBe(13);
});

test('calc.divide without 0', () => {
	expect(index.calculator.divide(10, 4)).toBe(2.5);
});
test('calc.divide by 0', () => {
	expect(index.calculator.divide(5, 0)).toBe(null);
});

test('calc.multiply', () => {
	expect(index.calculator.multiply(5, 6)).toBe(30);
});
