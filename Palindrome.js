// A palindrome is a word, number, phrase, or another sequence of characters which
// reads the same backward as forward, such as madam, racecar, or the number
// 10801.

// What is the sum of all numeric palindromes that are less than 10,000?

function sumOfPalindromes() {
    let sum = 0;

    for (let i = 0; i < 10000; i++) {

        //assuming single digits are palindromes...
        if (i < 10) {
            sum += i;
        }

        const strArray = i.toString().split('');

        if (i > 11 && i < 100) {
            if (strArray[0] == strArray[1] ) {
                sum += i;
            }
        }
        else if (i > 100 && i < 1000) {
            if (strArray[0] == strArray[2] ) {
                sum += i;
            }
        }
        else if (i > 1000 && i < 10000) {
            if (strArray[0] == strArray[3] && strArray[1] == strArray[2]) {
                sum += i;
            }
        }
    }

    return sum;
}

console.log(sumOfPalindromes());
