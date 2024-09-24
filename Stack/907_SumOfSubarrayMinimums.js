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

/*
Intuition:

Monotonic Stack: Use stacks to efficiently find the nearest smaller elements to the left and right for each array element.

previous smallest equal element and next smallest element: Track distances to the nearest smaller elements to determine the range where each element is the minimum.

Contribution Calculation: For each element, calculate its contribution to the sum of subarray minimums by multiplying its value with the count of subarrays where it is the minimum.

This approach ensures that each element's contribution is counted in constant time, resulting in an overall linear time complexity.
*/


var sumSubarrayMins = function (arr) {
    let n = arr.length
    let nse = new Array(n).fill(0)
    let psee = new Array(n).fill(0)
    let stack = []

    //calculating previous smallest equal element
    //for loop takes O(n) & while loop can also takes maximum O(n) 
    //so TC - O(2n)
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) { // do not use = sign here
            stack.pop()
        }
        psee[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    stack = []

    //calculating next smallest element
    //for loop takes O(n) & while loop can also takes maximum O(n) 
    //so TC - O(2n)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) { // use = sign here
            stack.pop()
        }
        nse[i] = stack.length ? stack[stack.length - 1] : n
        stack.push(i)
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i] * (nse[i] - i) * (i - psee[i])
        sum %= 1e9 + 7
    }
    return sum
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