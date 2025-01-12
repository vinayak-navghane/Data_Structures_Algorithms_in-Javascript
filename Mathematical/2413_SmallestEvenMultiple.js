// Q.2413. Smallest Even Multiple - Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

var smallestEvenMultiple = function (n) {

    let res = 0;
    if (n % 2 === 0) {
        res = n;
    } else {
        res = n * 2;
    }
    return res;
};
// TC- O(1)


// one more solution 
var smallestEvenMultiple = function (n) {
    if (n % 2 == 0) return n

    let assumedSEM = n * 2

    if (assumedSEM % 2 == 0 && assumedSEM % n == 0) {
        return assumedSEM
    }

};
// TC- O(1)
