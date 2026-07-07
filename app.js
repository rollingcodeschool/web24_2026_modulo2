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

//Callbacks
//función que se envía como argumento de otra función

// funcioncita(function(){})

//find()
//El método .find() recorre el array y devuelve el primer elemento que cumple con una condición que nosotros definimos.
console.log(
  productosTecnologicos.find(function (produc) {
    //acciones
    return produc === "Laptop MarcaA Air 16GB RAM";
  }),
);

productosTecnologicos.find((produc) => produc === "Laptop MarcaA Air 16GB RAM");

const numeritos = [18, 22, 100, 15, 28, 12, 25, 19, 5];

console.log(numeritos.find((num) => num > 20));

//filter()
//buscar monitores
const monitores = productosTecnologicos.filter((cosita) =>
  cosita.includes("Monitor"),
);

//buscar notebooks
const notebooks = productosTecnologicos.filter(
  (produc) => produc.includes("Laptop"), //[]
);

// if (notebooks.length > 0) {
//   alert("✅Encontramos " + notebooks.length + " productos");
// } else {
//   alert("❌No hay productos para esta búsqueda");
// }

const buscarProductos = (termino) => {
  return productosTecnologicos.filter((producto) => producto.includes(termino));
};

//forEach
productosTecnologicos.forEach((item, index) =>
  console.log(`${index + 1} - ${item}`),
);

// for (let index = 0; index < productosTecnologicos.length; index++) {
//   console.log(`${index + 1} - ${productosTecnologicos[index]}`)

// }

//map()
const productosConCodigo = productosTecnologicos.map((prod, index) => {
  let cod = new Date().getTime() * (index + 1);
  return `${prod}(cod: ${cod})`;
});
