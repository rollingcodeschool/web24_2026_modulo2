const seleccionArgentina = [
  "Lionel Scaloni",
  "Juan Musso", // 1
  "Marcos Senesi", // 2
  "Nicolás Tagliafico", // 3
  "Gonzalo Montiel", // 4
  "Leandro Paredes", // 5
  "Lisandro Martínez", // 6
  "Rodrigo De Paul", // 7
  "Valentín Barco", // 8
  "Julián Álvarez", // 9
  null, // 10
  "Giovani Lo Celso", // 11
  "Gerónimo Rulli", // 12
  "Cuti Romero", // 13
  "Exequiel Palacios", // 14
  "Nicolás González", // 15
  "Thiago Almada", // 16
  "Giuliano Simeone", // 17
  "Nico Paz", // 18
  "Nicolás Otamendi", // 19
  "Alexis Mac Allister", // 20
  "José Manuel López", // 21
  "Lautaro Martínez", // 22
  "Emiliano Martínez", // 23
  "Enzo Fernández", // 24
  "Facundo Medina", // 25
  "Nahuel Molina", // 26
];

/*
Consigna:
- Llegó una estrella: Agrega a Lionel Messi en la posición 10 de la lista.
- Un jugador se lesionó: Reemplazar a Juan Musso por Emiliano Martínez (cambiarlos de posiciones).
- Cambio de estrategia: El último jugador de la lista no jugará hoy, así que debes quitarlo.
- Informe final: Usa un bucle for para mostrar en consola la alineación final de la siguiente forma:
*/

seleccionArgentina.splice(10, 1, "Lionel Messi");
seleccionArgentina.splice(1, 1, "Emiliano Martínez");
seleccionArgentina.splice(23, 1, "Juan Musso");
seleccionArgentina.pop();

console.log("Formación final");
console.log("---------------");
for (let i = 1; i < seleccionArgentina.length; i++) {
  console.log(`${i} - ${seleccionArgentina[i]}`);
}
