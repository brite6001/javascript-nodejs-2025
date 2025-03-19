En JavaScript, `const`, `let` y `var` son palabras clave que se utilizan para declarar variables, pero tienen diferencias clave en su comportamiento.

---

### 1. **`let`**

- Se puede reasignar después de su declaración.
- No se puede redeclarar en el mismo ámbito (`scope`).
- Tiene un ámbito de bloque (`block scope`).
- No se eleva (`hoisting`) de la misma manera que `var`.

```js
let age = 30;
age = 31; // ✅ Se puede reasignar
```

---

### 2. **`const`**

- Debe asignarse un valor en el momento de su declaración.
- No se puede reasignar ni redeclarar.
- También tiene un ámbito de bloque (`block scope`).
- No se eleva de la misma manera que `var`.

```js
const birthYear = 1991;
// birthYear = 1990; ❌ Error: No se puede reasignar una constante
// const job; ❌ Error: Debe inicializarse al declararse
```

---

### 3. **`var`** (Evita usarlo en código moderno)

- Se puede reasignar y redeclarar en el mismo ámbito.
- Tiene un ámbito de función (`function scope`), no de bloque.
- Se eleva (`hoisting`), pero su valor es `undefined` hasta que se asigna.

```js
var job = "programmer";
job = "teacher"; // ✅ Se puede reasignar

var job = "engineer"; // ✅ Se puede redeclarar
```

---

### 4. **Diferencias en `hoisting`**

Cuando usas `var`, la variable se "eleva" (`hoisted`), pero su valor es `undefined` hasta que se asigna:

```js
console.log(job); // undefined
var job = "developer";
```

Con `let` y `const`, también se elevan, pero no pueden usarse antes de su declaración:

```js
console.log(age); // ❌ Error: Cannot access 'age' before initialization
let age = 25;
```

---

### 5. **Declaración implícita de variables (`lastName = "Schmedtmann";`)**

```js
lastName = "Schmedtmann";
console.log(lastName);
```

Esto funciona, pero **no es una buena práctica**. Cuando asignas un valor sin declararlo con `let`, `const` o `var`, JavaScript la convierte en una variable global implícita, lo que puede causar problemas en el código.

---

### **Conclusión**

| Característica | `let`                       | `const`                     | `var`                          |
| -------------- | --------------------------- | --------------------------- | ------------------------------ |
| Reasignable    | ✅                          | ❌                          | ✅                             |
| Redeclarable   | ❌                          | ❌                          | ✅                             |
| Ámbito         | Bloque                      | Bloque                      | Función                        |
| Hoisting       | Sí (Error si accedes antes) | Sí (Error si accedes antes) | Sí (Inicializa en `undefined`) |

Para código moderno, **usa `const` siempre que puedas** y solo usa `let` cuando realmente necesites reasignar una variable. Evita `var` en nuevos proyectos.
