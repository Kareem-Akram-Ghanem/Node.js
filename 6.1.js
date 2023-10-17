class Shape {
  #color;
  #filled;

  constructor(color = "red", filled = true) {
    this.#color = color;
    this.#filled = filled;
  }

  getColor() {
    return this.#color;
  }

  setColor(color) {
    this.#color = color;
  }

  isFilled() {
    return this.#filled;
  }

  setFilled(filled) {
    this.#filled = filled;
  }

  getArea() {
    throw new Error("Abstract method getArea() must be overridden.");
  }

  getPerimeter() {
    throw new Error("Abstract method getPerimeter() must be overridden.");
  }

  toString() {
    return `Shape [color=${this.#color}, filled=${this.#filled}]`;
  }
}

class Circle extends Shape {
  #radius;

  constructor(radius = 1.0, color, filled) {
    super(color, filled);
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }

  setRadius(radius) {
    this.#radius = radius;
  }

  getArea() {
    return Math.PI * this.#radius * this.#radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.#radius;
  }

  toString() {
    return `Circle [radius=${this.#radius}, ${super.toString()}]`;
  }
}

class Rectangle extends Shape {
  #width;
  #length;

  constructor(width = 1.0, length = 1.0, color, filled) {
    super(color, filled);
    this.#width = width;
    this.#length = length;
  }

  getWidth() {
    return this.#width;
  }

  setWidth(width) {
    this.#width = width;
  }

  getLength() {
    return this.#length;
  }

  setLength(length) {
    this.#length = length;
  }

  getArea() {
    return this.#width * this.#length;
  }

  getPerimeter() {
    return 2 * (this.#width + this.#length);
  }

  toString() {
    return `Rectangle [width=${this.#width}, length=${
      this.#length
    }, ${super.toString()}]`;
  }
}

class Square extends Rectangle {
  #width;
  #length;
  #side;

  constructor(side = 1.0, color, filled) {
    super(color, filled, width, length);
    this.#side = side;
    this.#width = side;
    this.#length = side;
  }

  getSide() {
    return this.#side;
  }

  setSide(side) {
    this.#side = side;
  }

  setWidth(width) {
    this.#width = width;
  }

  setLength(length) {
    this.#length = length;
  }

  toString() {
    return `Rectangle [width=${this.#width}, length=${
      this.#length
    }, ${super.toString()}]`;
  }
}

s1 = new Circle(5.5, "red", false);
console.log(s1);
console.log(s1.getArea());
console.log(s1.getPerimeter());
console.log(s1.getColor());
console.log(s1.isFilled());
console.log(s1.getRadius());
