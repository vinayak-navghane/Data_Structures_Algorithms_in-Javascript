// 148. Sort List
/*
Given the head of a linked list, return the list after sorting it in ascending order.

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Input: head = []
Output: []

*/

//Brute force - using extra space


var sortList = function (head) {
    if (head == null) return null

    let values = []

    let current = head

    while (current) {
        values.push(current.val)
        current = current.next
    }

    values.sort((a, b) => a - b) // n log n

    let newHead = new ListNode(values[0])
    let newTail = newHead

    for (let i = 1; i < values.length; i++) {
        newTail.next = new ListNode(values[i])
        newTail = newTail.next
    }
    return newHead
};

//TC - O(n log n)
//SC - O(n) because of using additional array