console.log("Hola desde Capiatá");

console.log(process.env);

const { NODE, SHELL } = process.env;
console.log(`NODE: ${NODE} - SHELL: ${SHELL}`)