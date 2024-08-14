// 33. Search in Rotated Sorted Array

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

// brute force - 

var search = function (nums, target) {

    var binarySearch = function (nums, target, left, right) {
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };

    let pivot = 0;

    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            pivot = i + 1;
            break;
        }
    }

    if (nums[pivot] === target) {
        return pivot;
    }

    if (pivot === 0 || target < nums[0]) {
        return binarySearch(nums, target, pivot, nums.length - 1);
    } else {
        return binarySearch(nums, target, 0, pivot - 1);
    }
};

// TC - O(n) 
// this approach is not recommended because time complexity is O(n) which is greater than O(log n)

// Optimized -

// [4,5,6,7,0,1,2]
//  l     m     r

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target)
            return mid;

        if (nums[left] <= nums[mid]) {

            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            }
            else left = mid + 1;
        }
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            }
            else right = mid - 1;
        }
    }
    return -1;
};

// TC - O(logn)


