/*
A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some people.  A square matrix mat is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the celebrity does not exist, return -1.

Note: Follow 0-based indexing.

Eg- Input: mat[][] = [[0 1 0],
                [0 0 0], 
                [0 1 0]]
Output: 1
Explanation: 0th and 2nd person both know 1. Therefore, 1 is the celebrity. 


Input: mat[][] = [[0 1],
                [1 0]]
Output: -1
Explanation: The two people at the party both know each other. None of them is a celebrity.
*/


class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        const n = mat.length;
        let stack = [];

        // Step 1: Push all people onto the stack
        for (let i = 0; i < n; i++) {
            stack.push(i);
        }

        // Step 2: Determine the candidate
        while (stack.length > 1) {
            let a = stack.pop();
            let b = stack.pop();

            if (mat[a][b]) {
                // a knows b, so a can't be a celebrity, but b might be
                stack.push(b);
            } else {
                // a doesn't know b, so b can't be a celebrity, but a might be
                stack.push(a);
            }
        }

        if (stack.length === 0) {
            return -1; // No candidates found
        }

        let candidate = stack.pop();

        // Step 3: Verify the candidate
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (mat[candidate][i] || !mat[i][candidate])) {
                return -1;
            }
        }

        return candidate;
    }
}


