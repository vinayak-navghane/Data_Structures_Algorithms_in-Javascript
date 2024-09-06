class Stack {
    constructor() {
        this.stack = []
    }
}

function push(data) {
    this.stack.push(data)
}

function pop() {
    this.stack.pop()
}
function peek() {
    return this.stack[this.stack.length - 1]
}

function isEmpty() {
    return this.stack.length === 0
}

function size() {
    return this.stack.length
}

function clear() {
    this.stack = []
}

function contains(element) {
    return this.stack.contains(element)
}

function reverse() {
    this.stack.reverse()
}

function printStack() {
    let str = ''
    for (let i = 0; i < this.stack.lenght; i++) {
        str += this.stack[i] + '/n'
    }
    return str
}

// Usage
let exampleStack = new Stack()

exampleStack.push(3)
exampleStack.push(6)
exampleStack.push(2)
exampleStack.push(9)
exampleStack.pop()

console.log(exampleStack.printStack())

