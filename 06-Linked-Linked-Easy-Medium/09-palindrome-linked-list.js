// Problem Statement:
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Examples:
// Input: head = [1,2,2,1]
// Output: true
// Input: head = [1,2]
// Output: false
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
// Approach 1:
// Traverse the linked list and store values in an array.
// Check whether the array is a palindrome by comparing elements from start and end moving towards the center.
// Time and Space Complexity:
// Time Complexity: O(n), where n is the number of nodes.
// Space Complexity: O(n), for the array storage.

// approach 1 is very basic and has TC = O(n) and SC = O(n);

function isPalindrome(head) {
    let arr = [];
    let curr = head;

    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) return false;
        i++;
        j--;
    }

    return true;
}

// approach 2, optimized approach see the explaination in the notes


function palindrome(head){
    // finding the middle element 
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    // our curr value is slow so don't make a new variable curr
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // checking for palindrome
    let first = head;
    let second = prev;

    while(second){
        if(first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
}

