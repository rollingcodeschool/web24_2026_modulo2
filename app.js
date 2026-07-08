//Objetos
const perro = {
  raza: "caniche",
  edad: 8,
  tamaño: "micro toy",
  adoptado: true,
  nombre: "Firulais",
};

const user = {
  id: 1,
  username: "pmarino",
  password: "12345678",
  state: true,
  role: "admin",
  score: [23, 56, 89],
  //   userView() {
  //     console.log(this.username);
  //   },
};

//ver propiedades
console.log(user.username);
console.log(user["username"]);

//Modificar valores de las propiedades
user.state = false;
user.password = "password";

//agregar una propiedad
user.area = "IT";
user.sexo = "Masculino";

//Borramos una propiedad
delete user.sexo;

//objeto anidado
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
console.log(lat, lng);

// for (let index = 0; index < array.length; index++) {

// }
// for (const key in user) {
//   //   if (key === "username" || key === "role") {
//   //     console.log(`${key}:${user[key]}`);
//   //   }
//   console.log(`${key}:${user[key]}`);
// }
const llaves = Object.keys(user);
console.log(llaves);
llaves.forEach((item) => console.log(user[item]));

// for (const key in user) {
//     if (Object.prototype.hasOwnProperty.call(user, key)) {
//         const element = user[key];
//         console.log(element)
//     }
// }

const contador = {
  valor: 0,
  increment() {
    this.valor++;
    console.log(this.valor);
  },
  decrement() {
    this.valor--;
    console.log(this.valor);
  },
  reset() {
    this.valor = 0;
    console.log(this.valor);
  },
};

const cliente = {
  nombre: "Andrea Gómez",
  id: "C-4589",
  carrito: [25.5, 150, 5.258888, 80, 12.5],
  sumaTotal() {
    const total = this.carrito.reduce((acum, valor) => acum + valor, 0);
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
  console.log("Edad: " + alumno.edad);
  console.log("--------------------");
});

const turnoMorning = alumnos.filter((alumno) => alumno.turno === "Mañana");
const turnoAfter = alumnos.filter((alumno) => alumno.turno === "Tarde");
