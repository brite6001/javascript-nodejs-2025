# Diferencia entre `==` y `===` con un ejemplo de código en JavaScript:

### 1. `==` (Operador de Igualdad Abstracta)

El operador `==` compara **valores** después de hacer una **coerción de tipo** (es decir, convierte los valores a un tipo común si es necesario).

### 2. `===` (Operador de Igualdad Estricta)

El operador `===` compara **valores y tipos** sin hacer conversión de tipo. Si los valores no son del mismo tipo, no se consideran iguales.

### Ejemplo de código:

```javascript
let a = 5;
let b = "5";

console.log(a == b); // true, porque el valor "5" se convierte a número antes de la comparación
console.log(a === b); // false, porque los tipos son diferentes (uno es número y el otro es cadena)

let c = null;
let d = undefined;

console.log(c == d); // true, porque null y undefined son considerados iguales con ==
console.log(c === d); // false, porque son de tipos diferentes

let e = 0;
let f = false;

console.log(e == f); // true, porque el valor 0 se convierte a false antes de la comparación
console.log(e === f); // false, porque uno es número y el otro es booleano
```

### Resumen:

- **`==`**: Compara **solo valores**, realizando conversión de tipo si es necesario.
- **`===`**: Compara tanto **valores como tipos**, sin realizar conversión de tipo.

Es preferible usar **`===`** en la mayoría de los casos para evitar comportamientos inesperados.
