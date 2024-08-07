// Q. Sum of all prime numbers between 1 and N- You are given a positive integer N, return the sum of all prime numbers between 1 and N(inclusive).

class Solution {

    isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    prime_Sum(n) {
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            if (this.isPrime(i)) {
                sum = sum + i;
            }
        }

        return sum;
    }
}
// TC- O(n raise to 3/2)

// Optimized- using Sieve of Eratosthenes algorithm 

class Solution {
    prime_Sum(n) {
        let isPrime = Array(n + 1).fill(true);

        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        let sum = 0;
        for (let i = 2; i <= n; i++) {
            if (isPrime[i])
                sum += i;
        }

        return sum;

    }
}
// TC- O(n log log(n))
