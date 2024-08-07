/*
136. Single Number - Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

// brute force- 
var singleNumber = function (nums) {

    let frequencyCounter = {};
    let res = 0;


    for (let val of nums) {
        if (nums.length == 1) {
            return val;
        }
        else if (nums.length > 1) {
            frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1
        }
    }


    for (let key in frequencyCounter) {
        if (frequencyCounter[key] == 1)
            res = Number(key);
    }


    return res;
};


//TC- O(n)
/*
more optimized - using XOR

var singleNumber = function(nums) {
   // Initialize the unique number...
   let uniqNum = 0;
   // TRaverse all elements through the loop...
   for (let i = 0; i < nums.length; i++) {
       // Concept of XOR...(how to convert to binary - 8 4 2 1 - use this method)
       uniqNum = uniqNum ^ nums[i];
   } return uniqNum;       // Return the unique number...


};
Explanation
The XOR operation has the property that a ^ a = 0 and a ^ 0 = a.
When you XOR all the numbers in the array, the pairs of the same number will cancel each other out because n ^ n = 0. The result will be the number that appears only once.
For the input [4, 1, 2, 1, 2]:
The pairs 1 and 2 cancel out because 1 ^ 1 = 0 and 2 ^ 2 = 0.
The remaining number is 4, which is the unique number.


TC- O(n)
*/