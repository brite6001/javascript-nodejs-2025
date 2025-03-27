En JavaScript, los valores **truthy** y **falsy** determinan cómo se evalúan las expresiones en un contexto booleano (como en un `if`).

---

### **1. Valores Falsy**

Son los valores que JavaScript considera como `false` cuando se usan en una expresión booleana:

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
```

👉 Si usas estos valores en un `if`, el bloque no se ejecutará:

```js
if (0) {
  console.log("Esto NO se ejecuta");
} else {
  console.log("0 es un valor falsy");
}
```

---

### **2. Valores Truthy**

Son los valores que se consideran `true` en un contexto booleano. Cualquier valor que **no sea falsy** es truthy.

```js
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean("false")); // true (cualquier string no vacío es truthy)
console.log(Boolean(Infinity)); // true
console.log(Boolean(true)); // true
```

👉 Si usas estos valores en un `if`, el bloque **sí se ejecutará**:

```js
if ("hello") {
  console.log('"hello" es un valor truthy');
}
```

---

### **3. Uso en Condiciones**

Los valores truthy y falsy son útiles en muchas situaciones, como:

#### ✅ **Operador lógico OR (`||`) para valores por defecto**

Si `username` es `null` o `""`, se asigna `"Invitado"`:

```js
let username = "";
let displayName = username || "Invitado";
console.log(displayName); // "Invitado"
```

#### ✅ **Operador lógico AND (`&&`) para ejecutar código solo si un valor es truthy**

Si `isLoggedIn` es truthy, se ejecuta la función:

```js
let isLoggedIn = true;
isLoggedIn && console.log("Bienvenido usuario"); // Se ejecuta
```

#### ✅ **Uso en ternarios**

```js
let age = 18;
let message = age >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(message); // "Mayor de edad"
```

---

### **Conclusión**

- **Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, `false`
- **Truthy values:** Todo lo demás, incluyendo `"0"`, `"false"`, `{}`, `[]`, y `Infinity`
- Útil en **condiciones, operadores lógicos (`||`, `&&`), valores por defecto y ternarios**.

💡 **Regla general**: Si quieres verificar si una variable tiene un valor válido, puedes usar `if (variable)` en lugar de `if (variable !== null && variable !== undefined && variable !== "")`.
