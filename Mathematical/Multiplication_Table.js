// Q.Multiplication Table - Create the multiplication table of a given number N and return the table as an array.

// Optimized-

class Solution {
    getTable(N) {
        let table = [];
        table.push(N);

        for (let i = 2; i <= 10; i++) {
            let res = N * i;
            table.push(res);

        }
        return table;

    }
}

// TC- O(1)
