/*Q. Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function takes two integers a and b as input and returns a list containing their LCM and GCD.

bruteforce-
*/
class Solution {
    lcmAndGcd(a, b) {
        let result = [];

        let gcd = Math.min(a, b);

        while (gcd > 0) {
            if (gcd % a == 0 && gcd % b == 0)
                break;
        }
        gcd--;


        let lcm = Math.max(a, b);

        while (lcm > 0) {
            if (lcm % a == 0 && lcm % b == 0)
                break;
        }
        lcm--;

        result.push(gcd, lcm)
        return result;
    }

}
//TC- O(a*b) – this is worst , not recommended


//optimized 1 - using Optimised Euclidean Algorithm.
class Solution {
    //(a*b) = lcm(a,b) * gcd(a,b)
    lcmAndGcd(a, b) {
        let result = [];
        let gcd = 0;

        function calculateGcd(a, b) {
            if (b == 0)
                return a;
            return calculateGcd(b, a % b);
        }

        gcd = calculateGcd(a, b);
        let lcm = (a * b) / gcd;

        result.push(lcm, gcd);
        return result;
    }
}

//TC- O(log(min(a,b))


class Solution {
    lcmAndGcd(a, b) {
        let calculateGcd = (a, b) => {
            if (b == 0) return a
            return calculateGcd(b, a % b)
        }

        let gcd = calculateGcd(a, b)
        let lcm = (a * b) / gcd
        return [lcm, gcd]
    }
}
//TC- O(log(min(a,b))
