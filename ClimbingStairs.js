/**
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. 
 * In how many distinct ways can you climb to the top?
 * 
 * @param {number} n
 * @return {number}
 */

//It is a linear Combination kind of problem which can be solved with Memoization
//to solve a problem with memoization you have to start from the smallest unit
//this means that to climb the stairs you need to work backwards
//this is because the last step just has one way

//note that this is the number of ways not the step counts in all the ways

// 1 step => 1step 
// 2 steps => 1step+1step and 2steps
// 3 steps => 1step+1step+1step and 1step+2steps and 2steps+1step 
//            1step+(1step+1step and 2steps) and 2steps+(1step) => f(2) + f(1)
// 4 steps => f(3) and f(2)

// function memoizedClimb() {
//     let cache = [];

//     return function climb(n) {
//         if (n < 3) {
//             return n;
//         }

//         if (cache.length > n-3){
//             return cache[n-3];
//         }

//         cache.push(climb(n-2) + climb(n-1));

//         console.log(cache);
//         return cache[n-3];
//     }
// }

// var climbStairs = memoizedClimb();


//top down recursive memoization
let cache = [];
var climbStairs = function (n) {

    if (n < 3) {
        return n;
    }

    if (cache.length > n-3){
        return cache[n-3];
    }

    cache.push(climbStairs(n-2) + climbStairs(n-1));

    console.log(cache);
    return cache[n-3];
    
};

//bottom up non recursive memoization
var climbStairs2 = function (n) {

    if (n < 3) {
        return n;
    }

    let cache = [1,2];

    for (let i = 3; i <= n; i++) {
        cache.push(cache[i-2] + cache[i-3]);
        console.log(cache);
    }
    return cache[n-1];
    
};

console.log(climbStairs(4));
console.log(climbStairs2(4));