//IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

// num1 = ((num1 * 100) + (num2 * 100) / 100);
// num1 = ((num1 * 100) + (num2 * 100) / 100);
// num1 = ((num1 * 100) + (num2 * 100) / 100);

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// console.log (num1.toString() + num2);
//num1 = num1.toString(); - trnaformar permanentemente em string
// console.log(num1.toString(2)) - representação binária do valor da variável
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));
// console.log(Number.isNaN(temp));
// let temp = num1 * 'Olá';
// console.log(temp)
