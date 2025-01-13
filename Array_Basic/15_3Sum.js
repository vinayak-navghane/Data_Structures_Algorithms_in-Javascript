/*
15. 3Sum - Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

//brute force - 

var threeSum = function (nums) {
    let n = nums.length
    let res = new Set()

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let temp = [nums[i], nums[j], nums[k]]
                    temp.sort((a, b) => a - b)
                    res.add(temp.toString());
                }
            }
        }
    }
    return Array.from(res).map(item => item.split(',').map(Number));


};
//Tc - O(n^3)






var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [];


    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }


        let l = i + 1;
        let r = nums.length - 1;


        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];


            if (sum > 0) {
                r--;
            }


            if (sum < 0) {
                l++;
            }




            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] == nums[l - 1] && l < r) {
                    l++;
                }
            }



        }
    }
    return res;
};

/*
 TC - Combining these steps, the overall time complexity is:
Sorting: O(nlog⁡n)O(n \log n)O(nlogn)
Outer loop: O(n)O(n)O(n)
Inner loop (two-pointer technique): O(n)O(n)O(n)
Thus, for each iteration of the outer loop, the inner loop runs in O(n)O(n)O(n), making the total complexity for the nested loops O(n2)O(n^2)O(n2).
Finally, combining the time complexities of both sorting and the nested loops, the total time complexity of the threeSum program is: O(nlog⁡n)+O(n2)O(n \log n) + O(n^2)O(nlogn)+O(n2)
Since O(n2)O(n^2)O(n2) grows faster than O(nlog⁡n)O(n \log n)O(nlogn), the overall time complexity of the threeSum program is O(n^2).
*/