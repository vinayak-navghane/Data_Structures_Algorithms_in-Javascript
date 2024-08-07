/*
Pascal Triangle
Given a positive integer N, return the Nth row of pascal's triangle.
Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of previous row.
The elements can be large so return it modulo 109 + 7.
*/

class Solution {
    nthRowOfPascalTriangle(N) {
        if (N == 1) {
            let tmp = [];
            tmp.push(1);
            return tmp;
        }
        let tans = this.nthRowOfPascalTriangle(N - 1);
        let ans = [];
        ans.push(1);
        for (let i = 1; i < tans.length; i++) {
            ans.push((tans[i] + tans[i - 1]) % (10 ** 9 + 7));
        }
        ans.push(1);
        return ans;
    }
}

/*
Time Complexity: O(N^2), As we generate the ans for every row and for each row we run a loop of size (n-1)th row.
Space Complexity: O(N), As we size of recursive call stack is N and size of ans is of size N.
*/
