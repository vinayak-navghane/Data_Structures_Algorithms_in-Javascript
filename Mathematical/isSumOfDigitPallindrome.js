// Q. Sum of Digit is Pallindrome or not- Given a number n.Find if the digit sum(or sum of digits) of n is a Palindrome number or not.

class Solution {
    isDigitSumPalindrome(n) {
        let sum = 0;
        let reverseNum;


        while (n > 0) {
            let digit = n % 10; // to extract 6 in case of 56
            sum += digit;
            n = Math.floor(n / 10); // n wil be 5
        }


        let numStr = sum.toString();
        let reverseStr = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            reverseStr += numStr[i];
        }
        // can use let result = //num1.toString().split('').reverse().join('');


        if (reverseStr == numStr) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
//TC- O(n)
