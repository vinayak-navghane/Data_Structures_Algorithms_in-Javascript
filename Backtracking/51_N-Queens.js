//51. N-Queens
/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
*/

/**
 * @param {number} n
 * @return {string[][]}
 */

const formatBoard = (board) => { // O(n^2)
    let result = []

    for (let col = 0; col < board.length; col++) {
        let newRow = new Array(board.length).fill(".")
        newRow[board[col]] = "Q"
        result.push(newRow.join(''))
    }
    return result
}

var solveNQueens = function (n) {
    //global result
    let result = []

    //backtracking case
    const dfs = (i, n, slate,) => {  //O(n!) or O(n*n)
        let lastQ = i - 1;

        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            //col conflict 
            if (slate[prevQ] == slate[lastQ]) return  //O(n)

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
    return result.map(board => formatBoard(board))

};
// TC - O(n!) * O(n^2) = O(n! * n^2)










