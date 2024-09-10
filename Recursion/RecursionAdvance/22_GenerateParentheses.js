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