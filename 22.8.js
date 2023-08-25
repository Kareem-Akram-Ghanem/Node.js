function recursiveStringLength(str) {
    if (str === "") {
      return 0;
    } else {
      return 1 + recursiveStringLength(str.slice(1));
    }
  }
  
  const length = recursiveStringLength("Hello, world!");
  console.log(length);

  

  //
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      const result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
  }

  
  //

  function elementsAtOddPositions(list) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      if (i % 2 !== 0) {
        result.push(list[i]);
      }
    }
    return result;
  }
  
  const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddElements = elementsAtOddPositions(myList);
  console.log(oddElements); 

  //
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(17)); 
  console.log(isPrime(12)); 

  
  //

  function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("Hello, how are you?")); 

  //

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    set_value() {
      
    }
  }
  
  class Zebra extends Animal {
    constructor(name, age, origin) {
      super(name, age);
      this.origin = origin;
    }
    
    set_value() {
      console.log(`I'm a Zebra named ${this.name}. I am ${this.age} years old and I come from ${this.origin}.`);
    }
  }
  
  class Dolphin extends Animal {
    constructor(name, age, origin) {
      super(name, age);
      this.origin = origin;
    }
    
    set_value() {
      console.log(`I'm a Dolphin named ${this.name}. I am ${this.age} years old and I come from ${this.origin}.`);
    }
  }
  
  const zebra = new Zebra("Stripes", 5, "Africa");
  const dolphin = new Dolphin("Flipper", 10, "Ocean");
  zebra.set_value();
  dolphin.set_value();
  
  