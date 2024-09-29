/*
Union of Two Linked Lists

Given two linked lists (L1 & L2), your task is to complete the function makeUnion(), which returns the union list of two linked lists. This union list should include all the distinct elements only and it should be sorted in ascending order.
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/


class Solution {

    makeUnion(head1, head2) {
        let list1 = []
        let list2 = []

        let current = head1

        while (current) {
            list1.push(current.data)
            current = current.next
        }

        current = head2

        while (current) {
            list2.push(current.data)
            current = current.next
        }

        list1.sort((a, b) => a - b); // O(n log n)
        list2.sort((a, b) => a - b); // O(m log m)


        let i = list1.length - 1;
        let j = list2.length - 1;
        let k = list1.length + list2.length - 1;
        let listUnion = new Array(list1.length + list2.length);

        while (j >= 0) { //O(n+m)
            if (i >= 0 && list1[i] > list2[j]) {
                listUnion[k] = list1[i]
                i--
            }
            else {
                listUnion[k] = list2[j]
                j--
            }
            k--

        }

        // If there are remaining elements in list1
        while (i >= 0) {
            listUnion[k] = list1[i];
            i--;
            k--;
        }


        let listUnionNonDuplicate = [...new Set(listUnion)] //O(n+m)
        let unionHead = new Node(listUnionNonDuplicate[0])
        let unionTail = unionHead

        for (let m = 1; m < listUnionNonDuplicate.length; m++) { // O(n+m)
            unionTail.next = new Node(listUnionNonDuplicate[m])
            unionTail = unionTail.next
        }
        return unionHead

    }
}
//TC - O(n log n + m log m)
//SC - O(n+m) for set

class Solution {

    makeUnion(head1, head2) {
        let mySet = new Set();

        let temp = head1
        while (temp) {                   //O(n)
            mySet.add(temp.data)
            temp = temp.next
        }

        temp = head2
        while (temp) {                 //O(m)
            mySet.add(temp.data)
            temp = temp.next
        }

        let arr = Array.from(mySet).sort((a, b) => a - b) // O((n+m) * log(n+m)).

        let unionHead = new Node(arr[0])
        let unionTail = unionHead

        for (let i = 1; i < arr.length; i++) {   //O(n+m).
            unionTail.next = new Node(arr[i])
            unionTail = unionTail.next
        }
        return unionHead;
    }
}

/*
1. create a set
2. add list 1 to set
3. add list 2 to set
4. convert the set to an array and sort it in ascending order
5. create a new linked list starting with the first element in the sorted array
6. add remaining array elements to linked list

*/
//TC - O((n+m) * log(n+m))
