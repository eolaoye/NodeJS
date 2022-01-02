function twoSum(nums, target) {
    //indices of the two numbers such that they add up to target
    //brute force method nested loops
    //better method:
    //loop once and store the complement as well as it's index in a hashset
    
    //check to make sure the nums array is not null and it has at least 2 elements
    
    
    const complementObject = {};

    for (let i=0; i< nums.length; i++) {
      
      //if the complement does not exist in the object add it
      if (complementObject[nums[i]] === undefined) {
          complementObject[target - nums[i]] = i;
      }
      else {
        //if the complement exists in the object then get the index 
        return [complementObject[nums[i]], i];
      }
    }
};

const nums1 = [3,2,4];
const target1 = 6;

console.log(twoSum(nums1, target1));

module.exports = twoSum;