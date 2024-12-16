class Solution {
    reverseEqn(s) {
        let stack = [];
        let ans = '';

        for (let i = 0; i < s.length; i++) {
            if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
                while (stack.length) {
                    ans += stack.pop();
                }
                ans += s[i];
            } else {
                stack.push(s[i]);
            }
        }

        while (stack.length) {
            ans += stack.pop();
        }

        return ans.split('').reverse().join('');
    }
}

// TC - O(n)
// SC - O(n)