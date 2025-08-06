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

class Heroe extends Persona {
  ciudad = "";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.ciudad = "New York";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y vivo en ${this.ciudad}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe("Ramón Sosa", "Spiderman", "Wikispider");
spiderman.quienSoy();
