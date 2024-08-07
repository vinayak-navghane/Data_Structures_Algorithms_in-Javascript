// Q. Count Squares - Consider a sample space S consisting of all perfect squares starting from 1, 4, 9 and so on. You are given a number N, you have to output the number of integers less than N in the sample space S.

// brute force-

class Solution {
    //Function to count the number of perfect squares.
    countSquares(N) {
        let count = 0;

        for (let i = 1; i < N; i++) {
            let sr = Math.sqrt(i);

            if (sr * sr == i)
                count++;
        }
        return count;
    }
}
// TC-O(N)

// Optimized 1-


class Solution {
    //Function to count the number of perfect squares.
    countSquares(N) {
        let count = Math.floor(Math.sqrt(N - 1));
        return count;
    }
}
// TC- O(sqrt(N))
