//condicional Switch
let num = 11;
// switch (num) {
//   case 5:
//     console.log("Hola");
//     break;
//   case 4:
//     console.log("Chau");
//     break;

//   default:
//     console.log("No se");
//     break;
// }

let day = new Date().getDay();
console.log("🤖 Hola! soy tu bot diario");
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
    break;
  default:
    console.log(
      "Sábado: El único día donde las calorías no cuentan y las alarmas están prohibidas por ley 😁.",
    );
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

opcion = Number(opcion);
