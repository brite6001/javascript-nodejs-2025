const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

// For tradicional: Este es el bucle clásico donde el índice se controla explícitamente,
// lo que te da acceso tanto al índice como al valor. Es útil cuando necesitas el índice
// de cada elemento, como cuando estás trabajando con un arreglo y necesitas manipular
// los índices directamente o realizar cálculos con ellos.
console.log("For tradicional");
for (let i = 0; i < heroes.length; i++) {
  // Accede al índice i y obtiene el valor del array 'heroes'
  console.log(heroes[i]); // Usamos 'i' como índice para acceder a los elementos del array
}

console.log("For in");

// For in: El 'for in' itera sobre los índices o claves de un array u objeto. En el caso
// de un array, recorrerá los índices (por ejemplo: 0, 1, 2, ...). Aunque es útil para recorrer
// objetos, en arrays puede ser menos eficiente y más propenso a errores si el array tiene elementos
// que no sean índices numéricos o elementos heredados. Se utiliza principalmente cuando necesitas
// el índice o clave, no el valor directamente.
for (let i in heroes) {
  // 'i' será el índice de cada elemento en el array
  console.log(heroes[i]); // Usamos 'i' como índice para acceder al valor del array
}

console.log("For of");

// For of: El 'for of' es el más moderno y eficiente para iterar sobre los valores de un array
// o cualquier objeto iterable (como cadenas de texto). No te da acceso al índice, solo al valor
// de cada elemento. Es más simple y recomendable cuando solo necesitas los valores, ya que evita
// las complicaciones de trabajar con índices.
for (let heroe of heroes) {
  // 'heroe' es directamente el valor del array, no el índice
  console.log(heroe); // Accedemos directamente al valor de cada elemento en el array
}
