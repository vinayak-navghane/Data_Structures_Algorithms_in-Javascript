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

