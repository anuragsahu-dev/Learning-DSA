// Problem Statement:
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Approach (Optimized Two-Pointer):
// Use a dummy node before the head to handle edge cases easily.
// Move the first pointer n steps ahead.
// Move both first and second pointers until first reaches the end.
// Now second is just before the node to be deleted. Skip it using second.next = second.next.next.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// approach 2 using two pointer p1 and p2.
// p1 pointer start from sentinel node.
// p2 pointer start from p1 + n
// both p1 and p2 moves 1 step one time 

function removeNthFromEnd(head, n) {
    let sentinel = new ListNode(0, head);

    let p2 = sentinel;

    for (let i = 0; i < n; i++) {
        p2 = p2.next;
    }

    let p1 = sentinel;

    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = p1.next.next;
    return sentinel.next;
}