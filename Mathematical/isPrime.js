/*
For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.

brute force-
*/

class Solution {

    isPrime(n) {

        if (n == 1)
            return 0;

        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return 0;


        return 1;

    }
}
//TC- O(n)

//Optimized 1-
class Solution {

    isPrime(n) {

        if (n == 1)
            return 0;

        for (let i = 2; i * i < n; i++)
            if (n % i == 0)
                return 0;


        return 1;

    }
}

//TC- O(sqrt(n))

// Optimized 2-
class Solution {

    isPrime(n) {

        if (n == 1)
            return 0;

        if (n == 2 || n == 3)
            return 1;

        if (n % 2 == 0 || n % 3 == 0)
            return 0;

        for (let i = 5; i * i < n; i = i + 6)
            if (n % i == 0 || n % (i + 2) == 0)
                return 0;


        return 1;

    }
}
//TC- O(sqrt(n)) - here TC is same as above but this is more optimized approach

