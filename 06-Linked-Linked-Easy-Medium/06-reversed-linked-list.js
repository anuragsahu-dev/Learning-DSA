// Problem Statement:
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Examples:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Input: head = [1,2]
// Output: [2,1]
// Input: head = []
// Output: []

function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev; // now our linked list start from prev because curr is now null so we can return prev
    // our starting node become head
};