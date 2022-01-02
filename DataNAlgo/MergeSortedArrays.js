//merge sorted arrays
//given two sorted arrays [0,3,6,9] and [1,3,4,7,8]
//output [0,1,3,3,4,6,7,8,9]

//brute force approach: nested for loops 
//use a while loop to go through the arrays at once.


function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
    else if (j >= arr2.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    else if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    }
    else {
      mergedArray.push(arr2[j]);
      j++;
    }    
  }

  return mergedArray;
}

const array1 = [0,3,6,9];
const array2 = [1,3,4,7,8]

console.log(mergeSortedArrays(array1, array2));