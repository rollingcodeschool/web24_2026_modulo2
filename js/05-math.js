//Math

let num1 = 23.55467;

//redondeo de números
console.log(Math.floor(num1)); // valor más bajo
console.log(Math.ceil(num1)); //valor más alto
console.log(Math.round(num1)); //redondea el valor >=5 mayor, <5 menor

//dos decimales
// let numeroDecimal = Math.round(num1 * 100) / 100;

// console.log(numeroDecimal);

let numeroFlotante = parseFloat(num1.toFixed(2));
console.log(numeroFlotante);

//números aleatorios /random
Math.random();
//números aleatorios entre 1 y 50
console.log(Math.ceil(Math.random() * 50));
