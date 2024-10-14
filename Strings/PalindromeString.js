/*
Given a string S, check if it is palindrome or not.

1.
Input: 
S = "abba"
Output: 1
Explanation: S is a palindrome

2.
Input: 
S = "abc" 
Output: 0
Explanation: S is not a palindrome
*/


class Solution {

    isPalindrome(S) {
        const n = S.length
        const half = Math.floor(n / 2)
        for (let i = 0; i < half; i++) {
            if (S[i] != S[n - i - 1]) {
                return 0
            }
        }
        return 1
    }
}

/*TC - Since the loop runs n/2 times and each iteration performs a constant-time comparison, the overall time complexity of the function is
O(n).
*/