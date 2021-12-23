

let calculations = 0;
let memCalc = 0;
function fibonacciGenerator() {
    let cache = {};

    //name the function if you want to reuse it
    return function fib(n) {
        calculations++
        if (n in cache) {
            return cache[n];
        }

        memCalc++;
        if (n < 2) {
            cache[n] = n;
        }
        else {
            cache[n] = fib(n-2) + fib(n-1);
        }
        
        return cache[n];
    }
}

const fibonacci = fibonacciGenerator();
console.log('fibonacci(50): ', fibonacci(50));
console.log('calculations: ', calculations);
console.log('memCalc: ', memCalc);


// let cache = {};
// function fibonacciMem(n) {
//     calculations++;

//     if (n in cache) {
//         return cache[n];
//     }

//     memCalc++;

//     if (n < 2) {
//         cache[n] = n;
//     }
//     else {
//         cache[n] = fibonacciMem(n-2) + fibonacciMem(n-1);
//     }
    
//     return cache[n];
// }


// console.log('fibonacciMem(500): ', fibonacciMem(500));
// console.log('calculations: ', calculations);
// console.log('memCalc: ', memCalc);
