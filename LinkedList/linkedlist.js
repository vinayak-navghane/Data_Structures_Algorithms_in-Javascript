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