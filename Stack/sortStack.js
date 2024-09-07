// Sort a Stack
/*
Given a stack, the task is to sort it such that the top of the stack has the greatest element.

Input:
Stack: 3 2 1
Output: 3 2 1

Input:
Stack: 11 2 32 3 41
Output: 41 32 11 3 2
*/

Stack.prototype.sort = function () {
    if (this.stack.length === 0) {
        return;
    }

    let temp = this.stack.pop();

    this.sort();

    insert(this.stack, temp);
};

function insert(stack, num) {
    if (stack.length === 0 || stack[stack.length - 1] > num) {
        stack.push(num);
        return;
    }

    let n = stack.pop();

    insert(stack, num);

    stack.push(n);
}

//TC - O(n^2)
// SC - O(n)