//Arrays

/*
Acceder: frutas[0] (nos da "manzana").
Modificar: frutas[1] = "naranja"; (cambiamos "banana" por "naranja").
Propiedad length: Cómo saber cuántos elementos tiene el array.

Consistencia: Usa const para declarar los arrays (la referencia es constante, aunque el contenido cambie) y explica brevemente que esto es una buena práctica.
*/

const listaDeCompras = ["Leche", "Pan", "Jugo", "Carne", "Verduras"];
//4to elemento en la lista
listaDeCompras[3]; //Carne -> el índice de los elementos comienza en 0

//Cambiar jugo por Gaseosa
listaDeCompras[2] = "Gaseosa";

//cuantos elementos tenémos en la lista
listaDeCompras.length;

/*

Métodos básicos
----------------
.push(): Agregar al final.
.pop(): Eliminar el último elemento.
.unshift(): Agregar al principio.
.shift(): Eliminar el primer elemento.  
.slice(): Crea una copia de un array
.concat: Unir dos o más array en uno nuevo
.splice: Eliminar elementos, modificar elementos, agregar elementos.(modifica el array)
*/

//Agregar queso al final de la lista
listaDeCompras.push("Queso");
console.log(listaDeCompras);

//Agregar al principio Papel higíenico
listaDeCompras.unshift("Papel higíenico");
console.log(listaDeCompras);

//Eliminar el último elemento
listaDeCompras.pop();
console.log(listaDeCompras);

//Eliminar el primer elemento
listaDeCompras.shift();
console.log(listaDeCompras);

//Hacer una copia de nuestra lista
const listaBackup = listaDeCompras.slice(0);
//Hacer una copia de la lista original pero solo de los primeros 3 productos
const listaBreve = listaDeCompras.slice(0, 3);
console.log(listaBreve);

//Crear otra lista de compras y unirla con la original
const listaElementosLimpieza = ["Detergente", "Jabón", "Papel higiénico"];
const listaCompletaDeCompras = listaDeCompras.concat(listaElementosLimpieza);
console.log(`Lista completa: ${listaCompletaDeCompras}`);

//Eliminar el 5to artículo de la lista completa
listaCompletaDeCompras.splice(4, 1);
console.log(`Eliminado 5to artículo: ${listaCompletaDeCompras}`);

//Agregar un artículo nuevo en la lista completa
listaCompletaDeCompras.splice(1, 0, "Jamón crudo"); //Agrego un elemento en segundo lugar
console.log(`agrego un artículo en segundo lugar:\n${listaCompletaDeCompras}`);

//Modificar el tercer elemento
listaCompletaDeCompras.splice(4, 1, "Pollo");
console.log(`modifico Carne por Pollo:\n${listaCompletaDeCompras}`);
