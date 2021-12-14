// Given a number N, return the index value of the Fibonacci sequnce
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// N=5 -> 2+3
//fibonacci 0 -> 0
//fibonacci 1 -> 1
//fibonacci 2 -> 1 => fibonacci(1) + fibonacci(0)
//fibonacci 3 -> 2 => fibonacci(2) + fibonacci(1)
//fibonacci 4 -> 3 => fibonacci(3) + fibonacci(2)
//fibonacci 5 -> 5 => fibonacci(4) + fibonacci(3)
//fibonacci 6 -> 8 => fibonacci(5) + fibonacci(4)

function fibonacciValue(index) {
    if (index < 2) {
      return index;
    }
  
    let a = 0;
    let b = 1;
    let valueAtIndex = 0;
  
    let counter = 2;
  
    for (let i = 2; i <= index; i++) {
      valueAtIndex = a + b;
      a = b;
      b = valueAtIndex;
    }
  
    return valueAtIndex;
  }
  
  function fibonacciRecursiveValue(index) {
    if (index < 2) {
      return index;
    }
  
    return fibonacciRecursiveValue(index - 1) + 
           fibonacciRecursiveValue(index - 2);
  }
  
  
  function fibonacciIndex(n) {
    let index = 0;
    let value = 0;
  
    while(value < n) {
      index++;
    //   value = fibonacciValue(index);
      value = fibonacciRecursiveValue(index);
    }
    
    return index;
  }
  
// const index = fibonacciIndex(13);
const value = fibonacciRecursiveValue(400)
// const value = fibonacciValue(45)


console.log(value);