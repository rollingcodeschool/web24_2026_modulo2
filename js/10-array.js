//arrays o Arreglos

const listaDeCompras = ["Leche", "Pan", "Jugo", "Carne", "Verduras"];

//Ver la cantidad de elementos del array
console.log(listaDeCompras.length);

//Ver un elemento
console.log(listaDeCompras[3]);

//Rasignar un valor
listaDeCompras[2] = "Gaseosa";

const cambiarElemento = (index, valor) => (listaDeCompras[index] = valor);

//Agregar queso al final de la lista
//push()
listaDeCompras.push("Queso");

//Agregar al principio de la lista Papel higiénico
//unshift
listaDeCompras.unshift("Papel Higiénico");

//Eliminar el último elemento
//pop()
listaDeCompras.pop();

//Eliminar el primer elemento
//shift()
listaDeCompras.shift();

//Hacer una copia del array
// const backupListaDeCompras = listaDeCompras; //❌ESTO ESTÁ MAL!
//slice
const backupListaDeCompras = listaDeCompras.slice(0, 3);

//Crear otra lista de compras y unirla con la original
const listaElementosLimpieza = ["Detergente", "Jabón", "Papel higiénico"];

const listaCompleta = listaDeCompras.concat(listaElementosLimpieza);
