
function sumOfSentence(input) {
    let sum = 0;
    const vowels = {'a':true, 'e':true, 'i':true, 'o':true, 'u':true};
    const inputArray = input.split('');
    for(let i=0; i < inputArray.length; i++) {
        const thisLetter = inputArray[i];
        if (thisLetter.toLowerCase() == thisLetter.toUpperCase()) {
            //this is not a letter
            continue;
        }

        const code = inputArray[i].charCodeAt(0);
        if (inputArray[i] in vowels) {
            sum += code * -1;
        }
        else {
            sum += code;
        }        
    }

    return sum;
}

const input = 
'Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve'
const input1 = 
'why and how..:'

console.log(sumOfSentence(input1));
