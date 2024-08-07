/* 
485. Max Consecutive Ones - Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

var findMaxConsecutiveOnes = function (nums) {

    let maxCount = 0;
    let currentCount = 0;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        }
        else {
            currentCount = 0;
        }
    }


    return maxCount;
};

// TC- O(N)

