function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

-------------------------------------------------------


2-

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


--------------------------------------------------------

3-

function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = 'welcome';
const reversed = reverseString(input);
console.log(reversed); 

---------------------------------------

4-




-----------------------------------------------


5-



function checkNumberSum(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

const number1 = 30;
const number2 = 20;

if (checkNumberSum(number1, number2) {
  console.log("True");
} else {
  console.log("False");
}

-----------------------------------------------------------------------------

6-

function checkPosNeg(num1, num2){
  return (num1 > 0 && num2 < 0) | (num1 < 0 && num2 > 0);
}

console.log(checkPosNeg(5, -6));

--------------------------------------------------------------

7-

function checkMultiple(num) {
  return num % 5 === 0 || num % 8 === 0;
}

console.log(checkMultiple(40));

-----------------------------------------------------------------------------------
8


function findLargest(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(findLargest(5, 35, 7));

-------------------------------------

9-

function computeSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

console.log(computeSum()); 

------------------------------------------------------------
10-

---------------------------------------------------
11-

function checkPositiveNegative(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkPositiveNegative(-7)); 



-------------------------------
13

function printSum(num1, num2) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
}

printSum(5, 7);

----------------------------------------------
14-

function calculateFactorial(number {
  let factorial = 1;
  for (let i = 1 i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}



----------------------------------------------------------------------

15-

function calculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}




