// 160. Intersection of Two Linked Lists
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/
//Brute force - 

var getIntersectionNode = function (headA, headB) {
    let mySet = new Set()

    let temp = headA
    while (temp) {        //O(n * 1)
        mySet.add(temp)
        temp = temp.next
    }

    temp = headB
    while (temp) {        //O(m * 1)
        if (mySet.has(temp)) {
            return temp
        }
        temp = temp.next;
    }
    return null
};

// TC - O(n + m)
// SC - O(n)

//Optimized - 


var getIntersectionNode = function (headA, headB) {
    let t1 = headA
    let t2 = headB

    while (t1 != t2) {
        t1 = t1.next
        t2 = t2.next

        if (t1 == t2) return t1

        if (t1 == null) t1 = headB
        if (t2 == null) t2 = headA
    }
    return t1
}

//TC - O(n1 + n2)
//SC - O(1)