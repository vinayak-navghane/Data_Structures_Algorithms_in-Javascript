/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

// brute force -

var isValid = (str) => {   // O(n)
    const stack = []
    let i = 0

    while (i < str.length) {
        let curParen = str[i]
        stack.push(curParen)

        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]

        if (open + closed === '()') {
            stack.pop()
            stack.pop()
        }
        i++
    }
    return stack.length === 0
}

var generateParenthesis = function (n) {        // O(2^2n)
    //global result
    let result = []

    //dfs recursive helper
    const dfs = (i, n, slate) => {
        if (i === n * 2) {
            if (isValid(slate.join(''))) {
                result.push(slate.join(''))
            }
            return
        }

        // dfs recursive call
        // add open paren
        slate.push('(')
        dfs(i + 1, n, slate)
        slate.pop()

        // add close paren
        slate.push(')')
        dfs(i + 1, n, slate)
        slate.pop()
    }
    dfs(0, n, [])
    return result
};

//TC - O(2^2n * n)
// SC - Actual space complexity is more complex but we can say is it same as 
// O(2^2n * n)

//Optimized - using Backtracking 


var generateParenthesis = function (n) {
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
    dfs(0, n, [], 0, 0)
    return result
};

//TC - O(4^n / sqrt(n)) or  O(4^n / n^3/2) 
//SC - O(4^n / sqrt(n)) or  O(4^n / n^1/2)