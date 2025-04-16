class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  // metodo que se ejecuta al momento de crear una nueva instancia del objeto
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  // método de clase
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  // método de clase
  miFrase() {
    this.quienSoy()
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Wikispider");
const ironman = new Persona("Tony Stark", "Ironman", "Wikinman");
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy()
spiderman.miFrase()