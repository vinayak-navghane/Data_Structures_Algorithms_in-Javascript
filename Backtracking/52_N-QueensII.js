//52. N-Queens II
/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    //global result
    let result = []

    //backtracking case
    const dfs = (i, n, slate,) => {
        let lastQ = i - 1;

        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            //col conflict 
            if (slate[prevQ] == slate[lastQ]) return

            //diagonal conflict
            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])

            if (rowDiff == colDiff) return
        }
        //base case
        if (i === n) {
            result.push(slate.slice())
            return
        }

        //dfs recursive case
        for (let col = 0; col < n; col++) {
            slate.push(col)
            dfs(i + 1, n, slate)
            slate.pop()
        }
    }
    dfs(0, n, [])
    return result.length
};