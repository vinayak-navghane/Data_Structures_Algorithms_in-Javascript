// Infix to Postfix
/*
Given an infix expression in the form of string str. Convert this infix expression to postfix expression.

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -. Ignore the right associativity of ^.

Input: str = "a+b*(c^d-e)^(f+g*h)-i"
Output: abcd^e-fgh*+^*+i-

Input: str = "A*(B+C)/D"
Output: ABC+*D/
*/



class Solution {
    // Function to convert an infix expression to a postfix expression.
    precedence(op) {
        if (op == '^') return 3
        else if (op == '*' || op == '/') return 2
        else if (op == '+' || op == '-') return 1
        else return -1
    }

    infixToPostfix(s) {
        let i = 0
        let stack = []
        let ans = ''

        for (let i = 0; i < s.length; i++) {
            let c = s[i]

            if (c >= "A" && c <= "Z" || c >= "a" && c <= "z" || c >= 0 && c <= 9)
                ans += c

            else if (c == '(') stack.push(c)

            else if (c == ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    ans += stack.pop()
                }
                stack.pop()
            }

            else {
                while (stack.length && this.precedence(c) <= this.precedence(stack[stack.length - 1])) {
                    ans += stack.pop()
                }
                stack.push(c)
            }
        }
        while (stack.length) {
            ans += stack.pop();
        }
        return ans
    }
}

//TC - O(n)
//SC - O(n)

const solution = new Solution();
const infixExpression = "a+b*(c^d-e)^(f+g*h)-i"
const postfixExpression = solution.infixToPostfix(infixExpression);
console.log(postfixExpression); 