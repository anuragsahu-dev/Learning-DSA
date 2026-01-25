// Problem Statement:
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that have Node.val == val, and return the new head.

// Examples:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Input: head = [], val = 1
// Output: []
// Input: head = [7,7,7,7], val = 7
// Output: []
// Constraints:
// The number of nodes in the list is in the range [0, 10⁴]
// 1 ≤ Node.val ≤ 50
// 0 ≤ val ≤ 50
// Approach:
// Use a dummy (sentinel) node before the head to simplify edge cases.
// Iterate through the list using a pointer.
// Skip any node whose value matches val.
// Return the next of sentinel as the new head.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function removeElements(head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;

    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinel.next;
}

// this is my code

// var removeElements = function(head, val) {
//     let node = new ListNode();
//     node.next = head;

//     let prev = node;
//     let curr = head;

//     while(curr){
//         if(curr.val === val){
//             prev.next = prev.next.next;
//             curr = curr.next;
//         }else{
//             prev = prev.next;
//             curr = curr.next;
//         }
//     }

//     return node.next;
// };
