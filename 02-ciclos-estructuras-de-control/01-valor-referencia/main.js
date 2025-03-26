// Asignación por valor (primitivos)
let a = 10;
let b = a;
a = 20;
console.log({ a, b });

// Asignación por referencia (objetos)
let juan = { nombre: "Juan" };
let ana = { ...juan }; // operador spread para crear una copia
// let ana = juan; // asignación por referencia
ana.nombre = "Ana";
console.log({ juan, ana });

// Paso por referencia en funciones
const cambiaNombre = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);
console.log({ peter, tony });
// Como los objetos se pasan por referencia, la función modifica directamente 'peter'
// 'tony' apunta al mismo objeto, por lo que ambos muestran { nombre: "Tony" }
