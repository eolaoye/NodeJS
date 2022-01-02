function memoizedAddTo80() {
    let cache = {};

    //this is called closures in javascript
    //returning a function from another function so as to enclose memory
    return function(n) {
        if (n in cache) {
            return cache[n];
        }

        console.log('long process')
        cache[n] = n + 80;
        return cache[n];
    }
}

//this is called closures in javascript
const memoized = memoizedAddTo80();

console.log('1: ', memoized(5));
console.log('2: ', memoized(5));
console.log('3: ', memoized(5));
