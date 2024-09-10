//78. Subsets
/*
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
*/

var subsets = function (nums) {
    //Global result
    let result = []

    //dfs recursive helper 
    var dfs = (i, nums, slate) => {
        //base case
        if (i === nums.length) {
            result.push(slate.slice())
            return
        }

        //dfs recursive case
        //exclude
        dfs(i + 1, nums, slate)

        //include
        slate.push(nums[i])
        dfs(i + 1, nums, slate)
        slate.pop()
    }
    dfs(0, nums, [])
    return result
};
//TC - O(2^n * n)
//SC - O(2^n * n)