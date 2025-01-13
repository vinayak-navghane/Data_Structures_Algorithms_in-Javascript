/*
1480. Running Sum of 1d Array - 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

// brute force -
var runningSum = function (nums) {
    let res = [];
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        res.push(sum);
        i++;
    }


    return res;
};
// TC- O(n)

// one more solution - 


var runningSum = function (nums) {
    let sum = 0
    let res = []
    let n = nums.length
    let i = 0

    while (n) {
        sum += nums[i]
        res.push(sum)

        i++
        n--
    }

    return res
};

//TC - O(n)