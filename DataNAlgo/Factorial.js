function findFactorialRecursive2(value) {
  return value * (value > 2 ? findFactorialRecursive(value - 1) : 1);
}

function findFactorialRecursive(value) {
  if (value === 2) {
    return 2;
  }
  
  return value * findFactorialRecursive(value - 1);
}

function findFactorialIterative(value) {
  let product = value;
  let counter = value;

  while(counter > 1) {
    counter--;
    product *= counter;
  }

  return product;
}

findFactorialRecursive(5);
// findFactorialIterative(5)