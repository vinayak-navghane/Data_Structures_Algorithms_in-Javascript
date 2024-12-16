// Q.Armstrong Numbers - You are given a 3-digit number n, Find whether it is an Armstrong number or not.

// optimized - 

class Solution {
    armstrongNumber(n) {

        let originalN = n;
        let sum = 0;
        let digits = 0;

        let temp = n;
        while (temp > 0) {
            // temp = Math.floor(temp/10);
            digits++;
        }


        while (n > 0) {
            let digit = n % 10; // to extract last digit of n
            sum += Math.pow(digit, digits);
            n = Math.floor(n / 10); // to remove last digit from n 
        }

        if (sum === originalN)
            return true;
        else
            return false;
    }
}
// TC - O(1)


class Solution {
    armstrongNumber(n) {
        let originalN = n
        let total = 0

        while (n > 0) {
            let lastDigit = n % 10
            n = Math.floor(n / 10)
            total += lastDigit * lastDigit * lastDigit
        }

        if (total === originalN) return true

        return false
    }
}

// TC - O(1)