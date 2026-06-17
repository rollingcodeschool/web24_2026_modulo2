//---------------------------------------------
let num1 = 23.55678;
//redondeo de números
console.log(Math.floor(num1)); //valor más bajo
console.log(Math.ceil(num1)); //valor más alto
console.log(Math.round(num1)); //redondea el valor decimal >= 5 mayor, decimal <5 menor

//Número con dos decimales
// let num1Decimal = Math.round(num1 * 100) / 100;
// console.log(num1Decimal);
let num1Float = Number(num1.toFixed(2));

//Números aleatorios entre 1 y 50
console.log(Math.ceil(Math.random() * 50));

//Adivina el Número
let numeroRandom = parseInt(Math.ceil(Math.random() * 10));
let player = parseInt(prompt("🤔Ingresa un número del 1 al 10"));

if (isNaN(player)) {
  console.error("❌ Error de ingreso de datos");
} else if (numeroRandom === player) {
  console.log("💫GANASTE!!");
  console.log(`El número es el ${numeroRandom}`);
} else {
  console.log("👎PERDISTE");
  console.log(
    `Tu número era el ${player}, pero el número correcto es: ${numeroRandom}`,
  );
}
