// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

/*
Creamos un bot que nos salude y diga que día es
*/

// console.log(new Date().getDay());
console.log("🤖 Hola! soy tu bot diario");
let day = new Date().getDay();
switch (day) {
  case 0:
    console.log(
      "Amo los domingos, excepto por esa pequeña parte donde me acuerdo de que mañana tengo que madrugar🙄.",
    );
    break;
  case 1:
    console.log("Si los lunes tuvieran cara, les daría un derechazo👊");
    break;
  case 2:
    console.log(
      "El martes es ese día donde te das cuenta de que el fin de semana largo fue una ilusión óptica😵‍💫",
    );
    break;
  case 3:
    console.log(
      "Mitad de semana: el cuerpo lo sabe, la billetera lo sufre y el cerebro ya está en modo espera🧠.",
    );
    break;
  case 4:
    console.log(
      "Técnicamente ya es viernes si aplicamos la lógica de: 'Ya fue, lo resuelvo el lunes'🫡",
    );
    break;
  case 5:
    console.log("¡Viernes! Entrando en modo 'No molestar' en 3, 2, 1...😶‍🌫️");
    break;
  case 6:
    console.log(
      "Sábado: El único día donde las calorías no cuentan y las alarmas están prohibidas por ley 😁.",
    );
    break;
  default:
    console.log("🤖 fuera de servicio...");
    break;
}

/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

alert("🧐Bienvenid@, te voy a sugerir la bebida que acompañará tu menú.");
let opcion = prompt(
  "🧐 Qué menú deseas hoy?\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
);

switch (opcion) {
  case "1":
    alert(
      "🧐 Excelente opción! podes acompañar el menú de carne con un buen vino tinto🍷",
    );
    break;
  case "2":
    alert(
      "🧐 Buena opción, te sugiero acompañar tu menú de pescado con un espumante vino blanco 🍾",
    );
    break;
  case "3":
    alert(
      "🧐 Por lo visto te estás cuidando, así que te sugiero que acompañes tu menú de verduras con un vaso de agua purificada de los manantiales🚰",
    );
    break;
  default:
    alert(
      "🧐Recordá que debés elegir entre las siguientes opciones:\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
    );
    break;
}
alert("🧐Gracias por usar mis servicios, nos vemos pronto👋");

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/

alert("🤑 Bienvenid@ al sistema de descuentos");
let compra = Number(prompt("🤑 Ingresá el valor de la compra..."));

if (isNaN(compra)) {
  alert("🤑 No puedo validar el monto ingresado.\nHasta pronto👋");
} else {
  switch (true) {
    case compra < 100:
      alert(
        "🤑 No puedo hacer descuentos con monto menores a $100.\nHasta pronto👋",
      );
      break;
    case compra <= 300:
      alert(
        `🤑Tu descuento es del 5%.\nEl monto que debes abonar es de $${(compra - compra * 0.05).toFixed(2)}`,
      );
      break;
    case compra <= 500:
      alert(
        `🤑Tu descuento es del 10%.\nEl monto que debes abonar es de $${(compra - compra * 0.1).toFixed(2)}`,
      );
      break;

    default:
      alert(
        `🤑Tu descuento es del 15%.\nEl monto que debes abonar es de $${(compra - compra * 0.15).toFixed(2)}`,
      );
      break;
  }
}
