function hasMatchingPairToSum(array, sum) {
  const mySet = new Set();
  if (array == null) return false;
  if (sum == null) return false;
  for (let i = 0; i < array.length; i++) {
    if (mySet.has(array[i])) return true;

    mySet.add(sum - array[i]);
  }

  return false;
}

const array = [1, 2, 4, 4];
const sum = 8;

console.log(hasMatchingPairToSum(array, sum));