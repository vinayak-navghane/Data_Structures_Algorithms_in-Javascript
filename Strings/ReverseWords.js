//Reverse Words in a string
/*
Given a String str, reverse the string without reversing its individual words. Words are separated by dots.

Note: The last character has not been '.'

Input: str = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole string(not individual words), the input string becomes much.very.program.this.like.i

Input: str = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole string , the input string becomes mno.pqr
*/


class Solution {
    // Function to reverse words in a given string.
    reverseWords(str) {
        let words = str
        return words.split(".").reverse().join(".")
    }
}

//TC - O(n)