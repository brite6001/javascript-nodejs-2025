function saludar() {
  console.log("Hola, soy Lucas");
}
saludar();

function saludar2(nombre) {
  console.log(`Hola, soy ${nombre}`);
}
saludar2("Luka Chevchenko");

const ciudad = function (ciudad) {
  console.log(`Vivo en ${ciudad}`);
};
ciudad("Buenos Aires");

const sumar = (a, b) => {
  return a + b;
};
console.log(sumar(2, 3));
