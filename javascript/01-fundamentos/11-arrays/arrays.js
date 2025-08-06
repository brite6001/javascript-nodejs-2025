let juegos = ["NBA 2K25", "Mario", "Metroid", "Stray"];
console.log("Largo:", juegos.length);

let primero = juegos[0];
console.log(primero);

let ultimo = juegos[juegos.length - 1];
console.log(ultimo);

console.log({ first: primero, last: ultimo });

// forEach ejecuta una instruccion por cada elemento del arreglo
juegos.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});

// Agregar un elemento al final del arreglo
let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

// Agregar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

// Eliminar el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Eliminar el primer elemento del arreglo
juegoBorrado = juegos.shift();
console.log({ juegoBorrado, juegos });

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// Buscar la posición indice del elmemento en el arreglo
// Si el elemento no existe en el arreglo, indexOf regresa -1 (no existe)
let strayIndex = juegos.indexOf("Stray");
console.log({ strayIndex });
