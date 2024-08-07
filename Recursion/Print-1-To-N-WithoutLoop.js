/*
Print 1 To N Without Loop
Input: n = 10
Output: 1 2 3 4 5 6 7 8 9 10
*/

class Solution {
    constructor() {
        this.s = ""; // Initialize an empty string to store the numbers.
    }

    printNosRecur(N) {
        if (N === 0) {
            return; // Base case: return when N reaches 0.
        }
        this.printNosRecur(N - 1); // Recursive call to printNosRecur() with N-1.
        this.s += N + " "; // Append N to the string s.
    }

    printNos(N) {
        this.printNosRecur(N); // Call the printNosRecur() function.
        console.log(this.s); // Print the final string s.
    }
}

// above code has increased unnecessarily because of GFG specification-
// simple code is as below - 

class Solution {
    printNos(N) {
        if (N == 1) {
            console.log(1);
            return;
        }

        this.printNos(N - 1);
        console.log(N)
    }
}
// TC - O(n)
