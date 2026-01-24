// Problem Statement:
// Find the middle node of a singly linked list using the slow and fast pointer approach.

// Approach:
// Use two pointers: slow and fast.
// Initialize both at the head of the list.
// Move slow one step and fast two steps at a time.
// When fast reaches the end, slow will be at the middle.
// Examples:
// Input: [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node is node 3.
// Input: [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: There are two middle nodes: 3 and 4. We return the second one.
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
// Time & Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)
// Use Case:
// This technique is efficient with O(n) time and O(1) space, commonly used in problems like finding the start of a loop, checking palindromes, etc.

// Definition for singly-linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {
    // Edge case: empty list or single node
    if (!head || !head.next) {
        return head;
    }

    // First Loop (while): Count the total number of nodes
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    // Calculate the middle index
    // For odd length (5) = 2;
    // For even length (6): 3;
    let middleIndex = Math.floor(length / 2);

    // Traverse to the middle node
    let middleNode = head;
    for (let i = 0; i < middleIndex; i++) {
        middleNode = middleNode.next;
    }

    return middleNode;
};

// ============= Testing the Solution =============

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new ListNode(val);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
}

// Helper function to print linked list from a given node
function printFromNode(node) {
    let result = [];
    let curr = node;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

let list1 = new MyLinkedList();
[1, 2, 3, 4, 5].forEach(val => list1.addAtTail(val));
let middle1 = middleNode(list1.head);
console.log("Middle Node and onwards:", printFromNode(middle1)); // Expected: [3,4,5]

let list2 = new MyLinkedList();
[1, 2, 3, 4, 5, 6].forEach(val => list2.addAtTail(val));
let middle2 = middleNode(list2.head); // list2.head = first node (value 1)
console.log("Middle Node and onwards:", printFromNode(middle2)); // Expected: [4,5,6]


// now we are solving it with approach 2;
// in this approach we are using slow and fast pointer;
// means we are using two pointer for it;
// fast pointer take 2 jump where as slow pointer take one jump at a time

function optimalMiddle(head) {
    let slow = head;
    let fast = head;

    // fast !== null && fast.next !== null both this and below line is same
    // fast && fast.next 

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

let mid = optimalMiddle(list1.head);

console.log("Middle Node and onwards:", printFromNode(mid));

