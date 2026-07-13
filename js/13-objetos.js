//objetos
const perro = {
  //key:value
  raza: "Caniche",
  edad: 8,
  estatura: "micro toy",
  adoptado: true,
  nombre: "Firulais",
};

console.log(
  `El nombre de tu perro es ${perro.nombre} y su raza es ${perro.raza}`,
);

const user = {
  id: 1,
  username: "pmarino",
  password: "12345678",
  state: true,
  role: "admin",
  score: [23, 56, 89],
};

console.log(user.username);
console.log(user["username"]);

//modificar el valor de una propiedad
user.state = false;
user.password = "password";

//Agregar una propiedad
user.area = "IT";
user.sexo = "Masculino";

//ejemplo
document.body.innerText = user.username;

//Eliminar propiedad
delete user.sexo;

const user002 = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};

console.log(user002.address.geo);
const latitud = user002.address.geo.lat;
const longitud = user002.address.geo.lng;
const { lat, lng } = user002.address.geo;

//funciones dentro de un objeto
const contador = {
  valor: 0,
  //increment
  increment() {
    this.valor++;
    console.log(this.valor);
  },
  //decrement
  decrement() {
    this.valor--;
    console.log(this.valor);
  },
  reset(valor = 0) {
    this.valor = valor;
    console.log(this.valor);
  },
  //reset
};

const cliente = {
  nombre: "Andrea Gómez",
  id: "C-4589",
  carrito: [25.5, 150, 5.258888, 80, 12.5],
  sumaTotal() {
    const total = this.carrito.reduce((accum, valor) => accum + valor, 0);
    return Number(total.toFixed(2));
  },
};

//Arrays de objetos
const alumnos = [
  {
    nombre: "Pedro",
    edad: 15,
    comision: "web17",
    turno: "Tarde",
  },
  {
    nombre: "Lucia",
    edad: 25,
    comision: "web18",
    turno: "Mañana",
  },
  {
    nombre: "Marcos",
    edad: 55,
    comision: "web17",
    turno: "Tarde",
  },
];

alumnos.forEach((alumno) => {
  console.log("Nombre: " + alumno.nombre);
  console.log("edad: " + alumno.edad);
  console.log("-----------------");
});

const morning = alumnos.filter((alumno) => alumno.turno === "Mañana");
const after = alumnos.filter((alumno) => alumno.turno === "Tarde");

/*
ALGORITMO
---------
- DATOS: Turno
- PROCESO: tome el turno y busque a todos los alumnos que sean de ese turno
- SALIDA: Una lista con los datos de los alumnos encontrados 
*/
function buscarPorTurno(turno) {
  return alumnos.filter(
    (alumno) => alumno.turno.toLowerCase() === turno.toLowerCase(),
  );
}

console.log(buscarPorTurno("TARDE"));
