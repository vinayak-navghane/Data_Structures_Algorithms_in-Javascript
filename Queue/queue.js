class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {
        if (this.isEmpty) {
            console.log("Cannot remove elements from Empty Queue")
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }

    peek() {
        if (this.isEmpty) {
            console.log("Cannot remove elements from Empty Queue")
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    clear() {
        this.queue = []
    }

    printQueue() {
        let str = ''

        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "/n"
        }
        return str
    }
}

let myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.enqueue(50)
myQueue.dequeue()
myQueue.size()
console.log(myQueue.printQueue());

