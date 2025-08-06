// Declaración de variables con 'let' (a partir de ES6)
let ciudad = "Madrid"; // variable de ámbito de bloque
let pais = "España";

// Declaración de variables con 'const' (a partir de ES6)
const fechaNacimiento = "1993-05-15"; // constante que no se puede cambiar después de su asignación

console.log("Ciudad:", ciudad);
console.log("País:", pais);
console.log("Fecha de nacimiento:", fechaNacimiento);

// Modificar variables con 'let' (pero no con 'const')
ciudad = "Barcelona";
pais = "Argentina";

// Intentar cambiar una constante provocará un error
// fechaNacimiento = "1995-07-20"; // Esto causaría un error

console.log("Ciudad modificada:", ciudad);
console.log("País modificado:", pais);

// Concatenar variables en un string
let mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(mensaje);

// Usar template literals (una forma moderna de concatenar strings)
let mensajeTemplate = `Mi nombre es ${nombre} y tengo ${edad} años. Vivo en ${ciudad}, ${pais}.`;
console.log(mensajeTemplate);
