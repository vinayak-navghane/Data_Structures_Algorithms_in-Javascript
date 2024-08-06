
/*
The Sieve of Eratosthenes is an efficient algorithm to find all prime numbers up to a given limit NNN. Here's a detailed explanation and the JavaScript implementation:
Algorithm Steps:
Initialize an Array:
Create a boolean array isPrime of size N+1N+1N+1, initialized to true. Set isPrime[0] and isPrime[1] to false since 0 and 1 are not prime numbers.
Mark Non-Primes:
Starting from the first prime number, 2, mark all of its multiples as false (not prime).
Move to the next number that is still marked true and mark all its multiples as false.
Continue this process up to N\sqrt{N}N​ because any non-prime number nnn must have a factor less than or equal to n\sqrt{n}n​.
Collect Primes:
After processing, all indices in isPrime that are still true represent prime numbers.
*/
//JavaScript Implementation:

class Solution {
    sieveOfEratosthenes(n) {
        let isPrime = Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        let primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) {
                primes.push(i);
            }
        }

        return primes;
    }
}

// Example usage
const solution = new Solution();
const limit = 50;
console.log(`Prime numbers up to ${limit}: ${solution.sieveOfEratosthenes(limit)}`);

/*
Explanation:
Initialization:
isPrime array is created and initialized to true for all numbers up to NNN.
isPrime[0] and isPrime[1] are set to false.
Marking Non-Primes:
For each number iii starting from 2, if isPrime[i] is true, mark all multiples of iii (starting from i2i^2i2) as false.
Collecting Primes:
After marking non-primes, iterate through the isPrime array and collect indices that are still true into the primes array.
Time Complexity:
Time Complexity: O(Nlog⁡(log⁡(N)))O(N \log(\log(N)))O(Nlog(log(N))), making it very efficient for large values of NNN.
Space Complexity: O(N)O(N)O(N), as we store boolean values for each number up to NNN.
This algorithm is efficient for generating all prime numbers up to a large limit and is widely used in various applications involving prime numbers.
*/