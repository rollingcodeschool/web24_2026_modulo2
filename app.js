//objetos
const perro = {
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
