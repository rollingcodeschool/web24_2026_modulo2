//Métodos de arrays avanzados

// const listaDeCompras = ["Leche", "Pan", "Jugo", "Carne", "Verduras"];
// const listaCompletaDeCompras = listaDeCompras.concat(listaElementosLimpieza);

// //Eliminar el 5to artículo de la lista completa
// listaCompletaDeCompras.splice(4, 1);
// console.log(`Eliminado 5to artículo: ${listaCompletaDeCompras}`);

// //Agregar un artículo nuevo en la lista completa
// listaCompletaDeCompras.splice(1, 0, "Jamón crudo"); //Agrego un elemento en segundo lugar
// console.log(`agrego un artículo en segundo lugar:\n${listaCompletaDeCompras}`);

// //Modificar el tercer elemento
// listaCompletaDeCompras.splice(4, 1, "Pollo");
// console.log(`modifico Carne por Pollo:\n${listaCompletaDeCompras}`);

const productosTecnologicos = [
  "Smartphone MarcaA Pro 256GB",
  "Smartphone MarcaB Lite 128GB",
  "Smartphone MarcaC Ultra 512GB",
  "Laptop MarcaA Air 16GB RAM",
  "Laptop MarcaB Pro 32GB RAM",
  "Laptop MarcaC Office 8GB RAM",
  "Auriculares Inalámbricos Sony NC",
  "Auriculares Inalámbricos Bose Comfort",
  "Auriculares Inalámbricos Apple Pro",
  "Smartwatch Deportivo Garmin GPS",
  "Smartwatch Casual Samsung Fit",
  "Smartwatch Premium Apple Watch",
  "Monitor Gaming 27 pulgadas 144Hz",
  "Monitor Curvo 34 pulgadas Ultrawide",
  "Monitor Oficina 24 pulgadas 4K",
  "Tablet GamaAlta 12 pulgadas",
  "Tablet Media 10 pulgadas",
  "Tablet Económica 8 pulgadas",
  "Teclado Mecánico RGB BlueSwitch",
  "Teclado Mecánico Compacto RedSwitch",
  "Teclado Membrana Ergonómico",
  "Mouse Inalámbrico Precisión Pro",
  "Mouse Ergonómico Vertical",
  "Mouse Gaming Sensor Óptico",
  "Cámara Mirrorless 4K Profesional",
  "Cámara Compacta Vlogging",
  "Cámara Deportiva Action Cam",
  "Consola Videoconsola NextGen A",
  "Consola Videoconsola Portátil B",
  "Consola Videoconsola Retro Edition",
];

//Find
//El método .find() recorre el array y devuelve el primer elemento que cumple con una condición que nosotros definimos.
//Diles: "Los métodos de array son solo funciones que reciben otras funciones". Eso les quita el miedo inmediatamente.

//Buscar Mouse
console.log(
  productosTecnologicos.find(function (item) {
    return item === "Mouse Inalámbrico Precisión Pro";
  }),
);

console.log(
  productosTecnologicos.find(
    (item) => item === "Mouse Inalámbrico Precisión Pro",
  ),
);

//Buscar número mayor que 20
const numeritos = [18, 22, 100, 15, 28, 12, 25, 19, 5];
console.log(numeritos.find((num) => num > 20));

//filter
/*
Como su nombre lo indica, este método se usa para filtrar un array y obtener un subconjunto de elementos que cumplan con una condición específica.
A diferencia de .find(), que se detiene al encontrar el primero, .filter() recorre todo el array de principio a fin y crea un nuevo array con todos los elementos que devolvieron true en la condición.
*/

//Buscar Monitores
const monitores = productosTecnologicos.filter((produc) =>
  produc.includes("Monitor"),
);
console.log(monitores);

const notebooks = productosTecnologicos.filter((produc) =>
  produc.includes("Notebook"),
);

console.log(notebooks);

const buscarProductos = (termino) => {
  return productosTecnologicos.filter((produc) => produc.includes(termino));
};

//forEach
//map

/*
1. forEach(): El ejecutor de acciones
forEach se utiliza cuando quieres ejecutar una acción (o efecto secundario) por cada elemento del array. No devuelve nada (retorna undefined).
Cuándo usarlo: Cuando quieres imprimir algo, guardar datos en una base de datos, o modificar una variable externa.
Ejemplo: Enviar correos a una lista de usuarios.

2. map(): El transformador
map se utiliza cuando quieres transformar un array en otro nuevo del mismo tamaño, pero con sus elementos modificados. map siempre devuelve un nuevo array.
Cuándo usarlo: Cuando quieres convertir datos (ej: convertir precios de dólares a pesos, extraer los nombres de una lista de objetos, aplicar cálculos).
Ejemplo: Obtener las iniciales de los usuarios.

¿Necesitas hacer algo con cada elemento (como un console.log)? Usa forEach.
¿Necesitas convertir cada elemento en otra cosa y obtener una nueva lista? Usa map.
*/

productosTecnologicos.forEach((produc, index) => {
  console.log(`${index + 1} - ${produc}`);
});

const productosConCodigos = productosTecnologicos.map((produc, index) => {
  // let cod = new Date().getTime() * (index + 1);
  return `${produc} (cod: ${new Date().getTime() * (index + 1)})`;
});

//reduce
const carritoDeCompras = [420, 500, 900, 1200];
const totalCarrito = carritoDeCompras.reduce(
  (accum, valor) => accum + valor,
  0,
);

const promedio =
  carritoDeCompras.reduce((accum, valor) => accum + valor) /
  carritoDeCompras.length;

console.log(totalCarrito);
console.log(promedio);

const palabras = ["Hola", "Curso", "Javascript", "2026"];
const mensaje = palabras
  .reduce((accum, valor) => accum + " " + valor, "")
  .trim();
console.log(mensaje);

//findIndex
const index = productosTecnologicos.findIndex(
  (item) => item === "Mouse Inalámbrico Precisión Pro",
);
console.log(productosTecnologicos[index]);
