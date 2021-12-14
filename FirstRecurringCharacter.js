// given an array of characters 
// find the first recurring character
// 
// ex. inputArray => [9,0,'o',9,'p',9]
// first recurring character => 9
// ex. inputArray => [9,0, 1, 1,0,9,'p',9]
// first recurring character => 1
// return undefined if there is no recurring character
// will there always be items in the input Array?

function firstRecurringCharacter(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;

  const characterSet = new Set();

  for(let i = 0; i < inputArray.length; i++){
    if (characterSet.has(inputArray[i])) {
      return inputArray[i];
    }
    else {
      characterSet.add(inputArray[i]);
    }
    console.log(characterSet);
  }

  return undefined;
}

const array = [9,0,'o',9,'p',9];
const array1 = [9, 0, 1, 1,0,9,'p',9];
const array2 = [2,3,4,5];
firstRecurringCharacter(array2);