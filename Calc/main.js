function calculator() {
  const add = (x, y) => x + y;

  const subtract = (x, y) => x - y;

  const multiply = (x, y) => x * y;

  const divide = (x, y) => x / y;

  return { add, subtract, multiply, divide };
}

console.log(calculator().add(1, 2));
