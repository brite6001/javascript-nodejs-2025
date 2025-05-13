class Rectangulo {
  area = 0;
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    this.area = this.base * this.altura;
  }
}

const rectangulo = new Rectangulo(10, 5);
rectangulo.calcularArea();
console.log(rectangulo.area); // 50
// console.log(rectangulo.base); // 10