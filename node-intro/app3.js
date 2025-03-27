console.log("Inicio de programa");

setTimeout(() => {
  console.log("Primer Timeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo Timeout");
}, 1);

setTimeout(() => {
  console.log("Tercer Timeout");
}, 0);

console.log("Fin de programa");

// Orden de ejecución
// Inicio de programa
// Fin de programa
// Segundo Timeout
// Tercer Timeout
// Primer Timeout
