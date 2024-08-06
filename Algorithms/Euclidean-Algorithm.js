/*
The Euclidean algorithm is an efficient method for computing the greatest common divisor (GCD) of two integers. It is based on the principle that the GCD of two numbers also divides their difference.

Euclidean Algorithm Steps:
Divide the larger number by the smaller number and find the remainder.
Replace the larger number with the smaller number and the smaller number with the remainder.
Repeat the process until the remainder is zero. The non-zero remainder just before this step is the GCD.

code -
*/
class Solution {
    // Function to compute GCD using the Euclidean algorithm
    gcd(a, b) {
        // Ensure a and b are positive integers
        if (b === 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }
}

// Example usage
const solution = new Solution();
const num1 = 56;
const num2 = 98;
console.log(`GCD of ${num1} and ${num2} is: ${solution.gcd(num1, num2)}`);

/*
Explanation:
Base Case: When b is 0, the GCD is a.
Recursive Call: The function gcd(a, b) calls itself with gcd(b, a % b).
How It Works:
For gcd(56, 98):
98 % 56 = 42, so gcd(56, 98) becomes gcd(56, 42).
56 % 42 = 14, so gcd(56, 42) becomes gcd(42, 14).
42 % 14 = 0, so gcd(42, 14) is 14.
Thus, the GCD of 56 and 98 is 14.
This recursive approach is concise and leverages the properties of the Euclidean algorithm to find the GCD efficiently.
*/