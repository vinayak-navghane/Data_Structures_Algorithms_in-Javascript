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


