/*
283. Move Zeroes - 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
    let left = 0; // Pointer for the position to place the next non-zero element


    // Move non-zero elements to the front
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            nums[left] = nums[right];
            left++;
        }
    }


    // Fill the rest of the array with zeros
    for (let i = left; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// TC- O(n)
