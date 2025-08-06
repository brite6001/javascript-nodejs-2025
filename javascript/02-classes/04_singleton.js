// Este código define una clase Singleton en JavaScript.
// La intención es que solo se pueda crear una única instancia de la clase, sin importar cuántas veces se intente instanciar.

class Singleton {
  // Propiedad estática de la clase: se usa para almacenar la única instancia permitida
  static instancia; // undefined

  // Propiedad de instancia: cada objeto puede tener un "nombre"
  nombre = "";

  // Constructor de la clase, que puede recibir un parámetro "nombre"
  constructor(nombre = "") {
    // Si ya existe una instancia previamente creada, se retorna esa instancia y se ignora la nueva
    if (!!Singleton.instancia) {
      return Singleton.instancia; // Se evita crear una nueva instancia
    }

    // Si no hay instancia previa, se guarda la instancia actual en la propiedad estática
    Singleton.instancia = this;

    // Se asigna el nombre proporcionado a la instancia
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("BlackPanther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
