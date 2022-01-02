// 3,5,6,400,399,1,4

// at index 0 = 3, assume we can rob 3
// at index 1 = 5, assume we can do 5 > 3
// at index 2 = 6, assume we can do 6+3 > 5
// at index 3 = 400, assume we can do 400 + 5 | 400 + 5 > 400 + 3 > 6 + 3
// at index 4 = 399, assume we can do 399 + 6 + 3 | 399 + 6 + 3 > 399 + 5 > 400 + 5
// at index 5 = 1, assume we can do 1 + f(400) || f(399) = a[5] + f(3) || f(4)
// at index 6 = 4, assume we can do 4 + f(4) || f(5) = a[6] + f(4) || f(5)

// at every index i, compare a(i) + f(i - 2) with f(i - 1)

/**
 * @param {number[]} nums
 * @return {number}
 */
 const cache = {};
 var rob = function(nums) {
     //assume that nums is an array with at least one element

     if (nums.length === 1) {
         return nums[0];
     }
     
     if (nums.length === 2) {
         return nums[0] > nums[1] ? nums[0] : nums[1];
     }
     
     cache[0] = nums[0];
     cache[1] = nums[0] > nums[1] ? nums[0] : nums[1];
         
     for(let i = 2; i < nums.length; i++) {
         
         cache[i] = nums[i] + cache[i - 2] > cache[i - 1] ? nums[i] + cache[i - 2] : cache[i - 1];
     }
     
     return cache[nums.length - 1];
 };

//since we only need the last two answers f(i-1) and f(i-2)
//we can discard the object and go with variables


var rob2 = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }
    
    let far = nums[0];
    let near = nums[0] > nums[1] ? nums[0] : nums[1]
    
    
    for(let i = 2; i < nums.length; i++) {
        const fI = nums[i] + far > near ? nums[i] + far : near;
        far = near;
        near = fI;
    }
    
    return near;
};