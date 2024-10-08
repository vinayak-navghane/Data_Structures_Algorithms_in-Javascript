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

    isSafe(grid, row, col, visited, n) {
        return (row >= 0 &&
            row < n &&
            col >= 0 &&
            col < n &&
            visited[row][col] == false &&
            grid[row][col] == 1
        )
    }

    helper(grid, row, col, path, visited, result, n) {
        if (!grid[row][col]) return

        if (row == n - 1 && col == n - 1) {
            result.push(path.slice().join(""))
            return
        }

        visited[row][col] = true

        let rowMove = [-1, 1, 0, 0] //UDLR
        let colMove = [0, 0, -1, 1] //UDLR
        let dir = ["U", "D", "L", "R"]


        for (let i = 0; i < rowMove.length; i++) {
            let nextRow = row + rowMove[i]
            let nextCol = col + colMove[i]

            if (this.isSafe(grid, nextRow, nextCol, visited, n)) {
                path.push(dir[i]);
                this.helper(grid, nextRow, nextCol, path, visited, result, n);
                path.pop();
            }
        }

        visited[row][col] = false
    }

    findPath(arr) {
        let n = arr.length
        let visited = new Array(n).fill(0).map(() => new Array(n).fill(false))

        let result = []
        let path = []

        this.helper(arr, 0, 0, path, visited, result, n)

        return result.sort()


    }
}


/*
Time Complexity: O(4^n^2)  in the worst case, which is an upper bound and practically much lower.

Space Complexity: O(n^2) primarily for the recursion stack and visited array, with additional space for the path and result arrays.
*/