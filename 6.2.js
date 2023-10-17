const GeometricObject = {
  getArea() {
    throw new Error("Abstract method getArea() must be implemented.");
  },

  getPerimeter() {
    throw new Error("Abstract method getPerimeter() must be implemented.");
  },
};

class Circle {
  _radius;

  constructor(radius = 1.0) {
    this._radius = radius;
  }

  getArea() {
    return Math.PI * this._radius * this._radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this._radius;
  }

  toString() {
    return `Circle [radius=${this._radius}]`;
  }
}

class Rectangle {
  _width;
  _length;

  constructor(width = 1.0, length = 1.0) {
    this._width = width;
    this._length = length;
  }

  getArea() {
    return this._width * this._length;
  }

  getPerimeter() {
    return 2 * (this._width + this._length);
  }

  toString() {
    return `Rectangle [width=${this._width}, length=${this._length}]`;
  }
}

s1 = new Circle(5.5);
console.log(s1);
console.log(s1.getArea());
console.log(s1.getPerimeter());
console.log(s1.toString());
