//reverse a string...
// use recursion with divide and conquer...
//1. split the string into two equal parts with 
//  left hand side having <= 1/2 of the string
//2. keep dividing until the length is <= 2
//3. if length of substring = 1 return the substring else return the flip
//4. return reverse(right) + reverse(left)


function reverse(value) {
  console.log('reverse ' + value);

  if (value.length < 2) {
      return value;
  }

  if (value.length === 2) {
      return value[1] + value[0];
  }

  const len = value.length;
  const leftLength = Math.floor(len/2);
  const left = value.substring(0, leftLength);
  const right = value.substring(leftLength);
  return reverse(right) + reverse(left);
}

function reverseIterative(value) {
  let output = '';
  for(let i = value.length; i > 0; i--){
    output += value[i-1];
    console.log(output);
  }
  return output;
}

console.log(reverseIterative('abcdefghijklmnopqrstuvwxyz'));
console.log(reverse('abcdefghijklmnopqrstuvwxyz'));
