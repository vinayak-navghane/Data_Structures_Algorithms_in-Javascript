/*
Longest Sub-Array with Sum K
Given an array arr containing n integers and an integer k. Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value k.
 
Examples:
 
Input :
arr[] = {10, 5, 2, 7, 1, 9}, k = 15
Output : 4
*/
// Brute force - 


class Solution {
    longestSubarray(arr, k) {
        let n = arr.length
        let len = 0

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let sum = 0
                for (let l = i; l < j; l++) {
                    sum += arr[l]
                    if (sum == k) {
                        len = Math.max(len, j - i + 1)
                    }
                }
            }
        }
        return len
    }
}
//TC - O(n^3)
//SC - O(1)


//Best case brute force - 

class Solution {
    longestSubarray(arr, k) {
        let n = arr.length
        let len = 0

        for (let i = 0; i < n; i++) {
            let sum = 0
            for (let j = i; j < n; j++) {
                sum += arr[j]
                if (sum == k) {
                    len = Math.max(len, j - i + 1)
                }

            }
        }
        return len
    }
}
//TC- O(n^2) SC- O(1)

//Better - it will work even if input array has zero or negative values

class Solution {
    longestSubarray(arr, k) {
        let preSumMap = new Map()
        let sum = 0
        let maxLen = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            if (sum == k) {
                maxLen = Math.max(maxLen, i + 1)
            }
            let rem = sum - k
            if (preSumMap.has(rem)) {
                let len = i - preSumMap.get(rem)
                maxLen = Math.max(maxLen, len)
            }
            if (!preSumMap.has(sum)) {
                preSumMap.set(sum, i)
            }
        }
        return maxLen
    }
}
// TC - O(n)
// SC - O(n)





class Solution {
    lenOfLongSubarr(arr, n, k) {
        // unordered_map 'um' implemented as hash table
        let um = new Map();
        let sum = 0, maxLen = 0;

        // traverse the given array
        for (let i = 0; i < n; i++) {
            sum += arr[i];

            // when subarray starts from index '0'
            if (sum == k)
                maxLen = i + 1;

            // make an entry for 'sum' if it is not present in 'um'
            if (!um.has(sum))
                um.set(sum, i);

            // check if 'sum-k' is present in 'um' or not
            if (um.has(sum - k)) {
                // update maxLength
                if (maxLen < (i - um.get(sum - k)))
                    maxLen = i - um.get(sum - k);
            }
        }
        // required maximum length
        return maxLen;
    }
}

/*
arr[] = {10, 5, 2, 7, 1, 9}, k = 15

i = 0 ,sum = 10, maxLen = 0, um = {(10:0)}
um does not have sum - k = -5, so no change to maxLen.

i = 1 ,sum = 15, maxLen = 2, um = {(10:0),(15:1)}
um does not have sum - k = 0, so no change to maxLen.

i = 2 ,sum = 17, maxLen = 2, um = {(10:0),(15:1),(17:2)}
um does not have sum - k = 2, so no change to maxLen.

i = 3 ,sum = 24, maxLen = 2, um = {(10:0),(15:1),(17:2),(24:3)}
um does not have sum - k = 9, so no change to maxLen.

i = 4 ,sum = 25, maxLen = 2, um = {(10:0),(15:1),(17:2),(24:3),(25:4)}
um has sum - k = 10, found at index 0.
Update maxLen: maxLen = 4 - um.get(25-15) = 4 - 0 = 4

i = 5 ,sum = 34, maxLen = 4, um = {(10:0),(15:1),(17:2),(24:3),(25:4),(34:5)}
um does not have sum - k = 9, so no change to maxLen.
*/

// TC- O(n)
