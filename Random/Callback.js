const add = (first, second, callback) => {
    setTimeout(() => {
        callback(first+second);
    }, 2000);
};

function add2(first, second, callback) {
    setTimeout(() => {
        callback(first+second);
    }, 2000);
}

// add(1, 4, (sum) => {
//     console.log(sum);
// });

add(1,4, sum => console.log(sum)); //one line arrow function

add2(1, 4, (sum) => {
    console.log(sum);
});