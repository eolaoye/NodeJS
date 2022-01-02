const input = [1, 2, 30, 45, 5, 10, 20, 89, 9];

console.log( input.sort());

const sortedInput = input.sort(function (a,b) {
    return a - b;
});

console.log(sortedInput);