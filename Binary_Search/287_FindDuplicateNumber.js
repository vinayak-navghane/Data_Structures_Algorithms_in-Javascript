//287. Find the Duplicate Number
/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast)
            break;
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    return slow;
};


/*
[1,3,4,2,2]

 f = 1
 s = 1

 s = nums[slow] = nums[1] = 3
 f = nums[nums[fast]] = nums[nums[1]] = nums[3] = 2

 s = nums[3] = 2
 f = nums[nums[fast]] = nums[nums[2]] = nums[4] = 2

now cycle is detected and loop is broken.

now slow2 starts at nums[0] and slow = 2

s = 2
s2 = 1

s = nums[2] = 4
s2 = nums[1] = 3

s = nums[4] = 2
s2 = nums[3] = 2

return s;
*/

// TC - O(n)
// SC - O(1)