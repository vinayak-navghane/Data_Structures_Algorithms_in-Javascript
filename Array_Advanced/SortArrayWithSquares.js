/*
Sort array with squares - 

Given a sorted array A containing N integers both positive and negative.

You need to create another array containing the squares of all the elements in A and return it in non-decreasing order.

Try to this in O(N) time.
*/

module.exports = {
    //param A : array of integers
    //return a array of integers
    solve: function (A) {

        if (A.length == 1) return A;

        if (A[0] >= 0) return A;

        if (A[A.length - 1] < 0) return A.reverse;

        let n;
        for (let i = 0; i < A.length; i++) {
            if (A[i] < 0) n = i;
            A[i] = A[i] * A[i];
        }

        let p = n + 1;

        let result = [];

        while (n >= 0 && p < A.length) {
            if (A[p] <= A[n]) {
                result.push(A[p]); p++;
            }
            else {
                result.push(A[n]); n--;
            }
        }

        while (n >= 0) {
            result.push(A[n]); n--;
        }

        while (p < A.length) {
            result.push(A[p]); p++;
        }

        return result;

    }
};

// TC- O(n)