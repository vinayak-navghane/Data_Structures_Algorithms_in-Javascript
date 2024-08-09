/*
169. Majority Element -

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// brute force - 

var majorityElement = function (nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
        if (count > Math.floor(n / 2)) {
            return nums[i];
        }

    }
};

//TC - O(n ^ 2)

// using Boyer-Moore Voting Algorithm 

var majorityElement = function (nums) {
    let temp;
    let count = 0;
    for (const num of nums) {
        count === 0 ? temp = num : 0;
        count += (num === temp) ? 1 : -1
    }
    return temp;
};

// TC - O(n)

