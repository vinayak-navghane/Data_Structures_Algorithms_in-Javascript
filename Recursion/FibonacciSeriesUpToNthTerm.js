/*
Fibonacci series up to Nth term
You are given an integer n, return the fibonacci series till the nth(0-based indexing) term. Since the terms can become very large return the terms modulo 109+7.
Example 1:
Input:
n = 5
Output:
0 1 1 2 3 5
*/

class Solution {
    /*
    * @param number n
    
    * @returns number[]
    */
    Series(n) {

        if (n < 2) {
            return [0, 1];
        }

        let res = this.Series(n - 1);
        res.push(res[res.length - 1] + res[res.length - 2]);
        return res;
    }
}
//   TC- O(2^n)      
