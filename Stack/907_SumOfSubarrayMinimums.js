//907. Sum of Subarray Minimums
/*
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

Example 1:
Input: arr = [3,1,2,4]
Output: 17

Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:
Input: arr = [11,81,94,43,3]
Output: 444
*/


var sumSubarrayMins = function (arr) {
    let n = arr.length;
    let left = new Array(n).fill(0); //O(n)
    let right = new Array(n).fill(0); //O(n)
    let stack = [];

    // Calculate left - for loop takes O(n) & while loop can also  
    // takes maximum O(n) so TC - O(2n)
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    stack = [];

    // Calculate right - for loop takes O(n) & while loop can also  
    // takes maximum O(n) so TC - O(2n)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    // Calculate the sum of minimums of all subarrays
    let sum = 0;
    for (let i = 0; i < n; i++) { //O(n)
        sum += arr[i] * (i - left[i]) * (right[i] - i);
        sum %= 1e9 + 7; // To handle large numbers, use modulo
    }

    return sum;
};

/*
Initializing the left and right arrays: O(n)
First loop to calculate left: O(n)
Second loop to calculate right: O(n)
Final loop to calculate the sum: O(n)

adding these we get O(4n), but we can skip the constant 

TC - O(4n) == O(n)
SC - O(3n + 1) == O(n)
*/