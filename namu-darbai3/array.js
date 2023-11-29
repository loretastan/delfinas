console.log('1. Salyga!');

const numbers = Array.from({ length: 30 }, () => String(Math.floor(Math.random() * (25 - 5 + 1)) + 5 ));

console.log(numbers);

console.log('2. Salyga A.dalis.')

const number = numbers.filter(value => parseInt(value) > 10).length;

console.log(number);