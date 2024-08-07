/*
Merge Sorted Array-

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
        else {
            nums1[k] = nums2[j]
            k--;
            j--;
        }
    }
};

/* 
Time Complexity:
The while loop iterates as long as j >= 0. In the worst case, it iterates n times (when all elements of nums2 need to be merged).
Each iteration of the while loop involves a constant number of operations: comparison and assignment.
Therefore, the time complexity of this code is 
O(n+m), where:

n is the number of elements in nums2.
m is the number of elements in the initial part of nums1 that needs to be merged.

Conclusion:
Time Complexity: O(n+m)
*/