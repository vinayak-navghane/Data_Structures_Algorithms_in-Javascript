// Q.Count Digits- Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

// Optimized- 


class Solution {
    //Function to check whether the number evenly divides N.
    evenlyDivides(N) {
        let originalN = N;
        let count = 0;

        while (N > 0) {
            let digit = N % 10;
            N = Math.floor(N / 10);

            if (digit != 0 && originalN % digit == 0)
                count++;
        }
        return count;
    }
}

// TC- O(log10(n))

