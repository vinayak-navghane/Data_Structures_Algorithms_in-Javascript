/*
Linked List has a node which is made by pair of data & next
*/
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


/*
When first node of LL is created the head points to the null 
*/
class LinkedList {
    constructor() {
        this.head = null
    }
}

//Insert at Beginning

LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
}

/* Insert at the End - we need to check where next is pointing to null, then 
   insert node there(at last)
*/

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let last = this.head;
    while (last.next) {
        last = last.next;
    }

    last.next = newNode;

}

//Insert at given Position

LinkedList.prototype.insertAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("Given prev node cannot be null");
        return;
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}

// Delete first node

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
}


// Delete Last node

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return // nothing to delete if list is empty
    }

    if (!this.head.next) {
        this.head = null; // there is only one node
        return
    }

    let secondLastNode = this.head;
    while (secondLastNode.next.next) {
        this.secondLastNode = this.secondLastNode.next;
    }

    secondLastNode.next = null;
}

// delete the given node

LinkedList.prototype.deleteByKey = function (key) {
    //if list is empty
    if (!this.head) {
        console.log("List is Empty")
        return
    }

    // data found at head
    if (!this.head.data === key) {
        this.head = this.head.next
        return
    }

    //traversing
    let current = this.head;

    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }

    console.log("No node found with key:", key)
}

// Search Operation

LinkedList.prototype.search = function (key) {
    let current = this.head

    while (current) {
        if (current.data === key) {
            return true;
        }
    }
    return false
}