class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  // propiedad estática
  // se puede acceder a ella sin instanciar la clase
  static _esPrivada = "Hola soy un atributo privado";
  static _conteo = 0;

  // metodo que se ejecuta al momento de crear una nueva instancia del objeto
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  static mensajes() {
    console.log(this._esPrivada);
    console.log("Hola soy un método estático");
  }

  // set solo recibe un argumento
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es la pizza`;
  }

  static get getConteo() {
    return Persona._conteo + " instancias";
  }

  // método de clase
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  // método de clase
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Wikispider");
const ironman = new Persona("Tony Stark", "Ironman", "Wikinman");
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = "pizza";
console.log(spiderman.getComidaFavorita);

Persona._conteo = 10;
console.log(`Conteo estatico: ${Persona._conteo}`);
console.log(Persona.getConteo);
Persona.mensajes();
