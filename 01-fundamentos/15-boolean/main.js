const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};
regresaTrue();

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};
regresaFalse();

// Operador Not (negacion)
console.log("Operador Not (negacion)");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());
console.log(!regresaTrue());

// Operador And
console.log("Operador And");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && !false);

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && "Hola Mundo" && 150; // 150
const a2 = "Hola" && "Mundo" && soyFalso && true; // false
const a3 = soyFalso || "Ya no soy falso"; // Ya no soy falso
const a4 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; // Ya no soy falso de nuevo
const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true; // true

console.log({ a1, a2, a3, a4, a5 });
