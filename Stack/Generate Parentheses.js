//Generate Parentheses
class Solution {
    AllParenthesis(N) {
        //global result
        let result = []
        //dfs helper function
        var dfs = (i, n, slate, oCount, cCount) => {
            // backtracking case
            if (oCount > n) return
            if (cCount > oCount) return

            //base case
            if (i === n * 2) {
                result.push(slate.join(''))
            }

            //dfs recursive call 
            //open paren
            slate.push('(')
            dfs(i + 1, n, slate, oCount + 1, cCount)
            slate.pop()

            //closed paren
            slate.push(')')
            dfs(i + 1, n, slate, oCount, cCount + 1)
            slate.pop()
        }
        dfs(0, N, [], 0, 0)
        return result
    }
}

//O(4^n / sqrt(n)) or  O(4^n / n^3/2) 