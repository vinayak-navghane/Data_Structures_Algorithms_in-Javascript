// 26. Remove Duplicates from Sorted Array - Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function (nums) {

    let n = nums.length;
    let i = 0, k = 0;


    for (let i = 0; i < n; i++)
        if (nums[i] > nums[k])
            nums[++k] = nums[i];

    return k + 1;
};
// TC -O(n)
