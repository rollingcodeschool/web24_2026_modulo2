//Condicionales
// let nombre = prompt("Ingrese su nombre");

// Estructuras condicionales

/*
Condicional simple
-------------------
Si se cumple condición entonces hacer... 

if (condition) {
    acciones
}

Condicional básico
------------------
if (condition) {
    acciones
} else {
    acciones
}  
    
Condicional anidado
-------------------
if(condition){
    acciones
}else if(condition){
    acciones
}else{
    acciones
}

*/

let userName = "BadBunny";
let acceso = false;
let rol = "user";

if (acceso === true) {
  console.log("✅ Acceso concedido");
}

//concatenar strings
console.log("Bienvenido" + " " + userName + " | Acceso: " + acceso);
console.log("Bienvenido", userName, acceso);
//template string
console.log(`Bienvenido ${userName} - rol: ${rol}`); //Alt Gr + } | Alt Gr + [

//si se cumple condición entonces hacer...
//si no hacer otra cosa

if (acceso === true) {
  console.log("✅ Bienvenido " + userName + " Acceso concedido");
} else {
  console.log(`❌Acceso denegado | status: ${acceso}`);
}

//si se cumple la primera condición entonces hacer...
// si no, comprobamos la segunda condición y ejecutamos
//si no hacer otra cosa

if (acceso) {
  console.log("✅ Bienvenido " + userName + " Acceso concedido");
} else if (rol === "admin") {
  console.warn("Sus credenciales caducaron, solicitar asistencia ");
} else {
  console.error(`❌Acceso denegado | status: ${acceso}`);
}

//Solicitar una nota de un examen, según la nota devolvemos si aprobó o no

// let nota = 95;
let nota = prompt("Ingrese la nota");

if (nota >= 90) {
  console.log("⭐Excelente! obtuviste una A");
} else if (nota >= 80) {
  console.log("🎉Muy bien! obtuviste una B");
} else if (nota >= 70) {
  console.log("👍Bien! obtuviste una C");
} else if (nota >= 60) {
  console.log("👌Suficiente! obtuviste una D");
} else {
  console.log("👎Insuficiente... obtuviste una F");
}

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/
let compra = Number(prompt("Ingrese el valor de la compra"));

console.log(parseInt(nota));
console.log(parseFloat(nota));
console.log(Number(nota));
//Cuál usar? Depende del tipo de número que esperemos recibir, si esperamos un número entero, parseInt() es la mejor opción, si esperamos un número decimal, parseFloat() es la mejor opción, si no sabemos qué tipo de número vamos a recibir, Number() es la mejor opción.
