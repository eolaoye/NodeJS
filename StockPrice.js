/**
 * @param {number[]} prices
 * @return {number}
 */
// 5,6,9,8,77,4,5,6,3,2,5,8,7
// f(n-1) = greatest spread before this point
// S(n-1) = smallest number before this point
// a[n] = number at this point

//spread at 5 is 0,
//spread at 6 is 1 => 6-5
//spread at 9 is 4 => 9-5 => a[n] - S(n-1) > f(n-1)
//spread at 8 is 4 => f(n-1) => a[n] - S(n-1) <= f(n-1)
//spread at 77 is x => 77-5 => a[n] - S(n-1) > f(n-1)

//7,10,4,8,8,77,4,5,6,3,2,5,8,7
//spread at 7 is 0
//spread at 10 is 3 => 10-7 => a[n] - S(n-1) > f(n-1)
//spread at 4 is 3 => f(n-1) => a[n] - S(n-1) <= f(n-1) ... reset S(n-1)?
//spread at 8 is 4 => 8-4 => a[n] - S(n-1) > f(n-1)
//spread at 8 is 4 => f(n-1) => a[n] - S(n-1) <= f(n-1)
//spread at 77 is x => 77-4 => a[n] - S(n-1) > f(n-1)

var maxProfit = function(prices) {
    
    if (prices.length === 1) return 0;
    
    let smallestNum = prices[0];
    let greatestSpread = 0;
    
    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < smallestNum) {
            //reset smallest num
            smallestNum = prices[i];
        }

        if ((prices[i] - smallestNum) > greatestSpread){
            //reset spread
            greatestSpread = prices[i] - smallestNum;
        }
    }
    
    return greatestSpread;
};

console.log(maxProfit([7,1,5,3,6,4]));