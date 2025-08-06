// Data Types

// Declaramos una variable con un valor booleano
let javascriptIsFun = true;
console.log(javascriptIsFun); // true

// Mostramos el tipo de dato con typeof
console.log(typeof javascriptIsFun); // "boolean"

// Cambiamos el valor de la variable a un string
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // "string"

// Declaramos una variable sin asignarle un valor (undefined)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"

// Asignamos un valor numérico a la variable
year = 1991;
console.log(typeof year); // "number"

// Curiosidad: typeof null devuelve "object" (esto es un error histórico de JavaScript)
console.log(typeof null); // "object"
