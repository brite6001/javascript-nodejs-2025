const arr = new Array(10); // nuevo arreglo con una instancia de 10 elementos
console.log(arr); // [ <10 empty items> ]

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log(videoJuegos.length); // 3
console.log(videoJuegos); // [ 'Mario 3', 'Megaman', 'Chrono Trigger' ]
console.log(videoJuegos[0]); // Mario 3

let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];
console.log(`Arreglo de cosas: ${arregloCosas}`);
