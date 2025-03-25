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

// Object.freeze(personaje) hace que el objeto persona sea inmutable, lo que significa que:
// No se pueden agregar nuevas propiedades al objeto.
// No se pueden eliminar propiedades del objeto.
// No se pueden modificar los valores de las propiedades existentes.
// No se puede cambiar el prototipo del objeto.
Object.freeze(personaje);
personaje.dinero = 1000000000;
console.log(personaje);

// Listado de todas las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log("Propiedades:", propiedades);

const valores = Object.values(personaje);
console.log("valores:", valores);
