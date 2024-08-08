/*
Given an integer array A of size N.

You have to pick exactly B elements from either left or right end of the array A to get the maximum sum.

Find and return this maximum possible sum.

NOTE: Suppose B = 4 and array A contains 10 elements then

You can pick the first four elements or can pick the last four elements or can pick 1 from the front and 3 from the back etc. you need to return the maximum possible sum of elements you can pick. 

Input 1:

 A = [5, -2, 3 , 1, 2]
 B = 3

 Output 1: 8

 Explanation 1:

 Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
*/

module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let currentSum = 0;
        let n = A.length;

        for (let i = 0; i < B; i++) {
            currentSum += A[i];
        }

        let maxSum = currentSum;

        for (let i = 1; i <= B; i++) {
            currentSum = currentSum - A[B - i] + A[n - i];
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
};
// TC - O(B), where B is number of elements we need to pick