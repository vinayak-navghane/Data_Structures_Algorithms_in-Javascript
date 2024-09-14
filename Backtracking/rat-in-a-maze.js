/*
Input: mat[][] = [[1, 0, 0, 0],
                [1, 1, 0, 1], 
                [1, 1, 0, 0],
                [0, 1, 1, 1]]
Output: DDRDRR DRDDRR
Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
*/

class Solution {
    /**
    * @param number n
    * @param number[][] arr

    * @returns string[]
    */

    isSafe(row, col, grid, visited, n) {
        return (
            row >= 0 &&
            row < n &&
            col >= 0 &&
            col < n &&
            visited[row][col] == false &&
            grid[row][col] == 1
        );
    }

    helper(grid, row, col, path, visited, n, result) {
        if (!grid[row][col]) return

        if (row == n - 1 && col == n - 1) {
            result.push(path.slice().join(""));
            return;
        }

        visited[row][col] = true;

        let rowMove = [-1, 1, 0, 0]; //up,down,left right
        let colMove = [0, 0, -1, 1]; //up,down,left right
        let dir = ["U", "D", "L", "R"];  //up,down,left right   

        for (let i = 0; i < rowMove.length; i++) {
            let nextRow = row + rowMove[i];
            let nexCol = col + colMove[i];
            let newPath = [...path, dir[i]];

            if (this.isSafe(nextRow, nexCol, grid, visited, n)) {
                this.helper(grid, nextRow, nexCol, newPath, visited, n, result);
            }
        }

        visited[row][col] = false;
    }

    findPath(arr) {
        let n = arr.length

        let visited = new Array(n).fill(0).map(() => new Array(n).fill(false));

        let path = [];
        let result = [];

        this.helper(arr, 0, 0, path, visited, n, result);

        return result.sort();
    }
}

/*
Time Complexity: O(4^n^2)  in the worst case, which is an upper bound and practically much lower.

Space Complexity: O(n^2) primarily for the recursion stack and visited array, with additional space for the path and result arrays.
*/