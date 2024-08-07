/*
268. Missing Number - Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Approach: Mathematical Formula
Sum Formula for Range: The sum of the first n natural numbers is given by the formula:
Sum=n⋅(n+1)2\text{Sum} = \frac{n \cdot (n + 1)}{2}Sum=2n⋅(n+1)​
Sum of Array Elements: Compute the sum of the elements in the given array.
Missing Number Calculation: The missing number can be found by subtracting the sum of the array elements from the sum of the first n natural numbers.
*/

var missingNumber = function (nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1) / 2);
    let totalSum = nums.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - totalSum;
}
// TC- O(N)
// SC- O(1)
