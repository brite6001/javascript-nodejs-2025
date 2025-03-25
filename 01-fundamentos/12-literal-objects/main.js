let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

// Nombre del personaje: Tony Stark
console.log("Nombre del personaje:", personaje.nombre);

console.log("Personaje: ", personaje);

console.log("Coors:", personaje.coords.lat);
console.log("No. Trajes:", personaje.trajes.length);
console.log("Ultimo Traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo:", personaje[x]);

// Borra la propiedad edad del objeto personaje
delete personaje.edad;
console.log(personaje);

// Object.entries(personaje) convierte el objeto personaje en un array de pares clave-valor
const entriesPares = Object.entries(personaje);
console.log("entriesPares:", entriesPares);
