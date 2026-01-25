// Problem Statement:
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// Examples:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at ‘8’
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at ‘2’
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Constraints:
// The number of nodes in each list is in the range [0, 10⁴].
// -10⁵ ≤ Node.val ≤ 10⁵
// Lists are guaranteed to be acyclic and maintain their structure.
// Approach:
// Store all nodes of headB in a Set.
// Traverse headA; return the node when one exists in the set.
// If no match is found, return null.
// Time and Space Complexity:
// Time Complexity: O(n + m), where n and m are lengths of listA and listB.
// Space Complexity: O(m), storing nodes of listB in a set.

// ============================================
// APPROACH 1: Hashing (O(m) Space)
// ============================================
var getIntersectionNodeHashing = function (headA, headB) {
    // Store all nodes of listB in a Set
    const set = new Set();
    let current = headB;

    while (current !== null) {
        set.add(current); // Store the node reference, not the value!
        current = current.next;
    }

    // Traverse listA and check if any node exists in the set
    current = headA;
    while (current !== null) {
        if (set.has(current)) {
            return current; // Found intersection
        }
        current = current.next;
    }

    return null; // No intersection
};

// ============================================
// APPROACH 2: Two Pointers (O(1) Space) - OPTIMAL
// ============================================
// Key Insight:
// If list A has length (a + c) and list B has length (b + c),
// where c is the shared intersection part:
// - Pointer A travels: a + c + b steps
// - Pointer B travels: b + c + a steps
// Both travel the SAME total distance, so they meet at intersection!

// approach 1 hashing with Set

function intersectionNode(headA, headB) {
    let set = new Set();
    let currB = headB;

    while (currB) {
        set.add(currB);
        currB = currB.next;
    }

    let currA = headA;

    while (currA) {
        if (set.has(currA)) return currA;
        currA = currA.next;
    }

    return null;
}

// approach 2

function getIntersectionNode(headA, headB) {

    let pA = headA;
    let pB = headB;

    // Keep traversing until they meet (at intersection or both become null)
    while (pA !== pB) {
        // When pA reaches end of listA, redirect to headB
        // Otherwise, move to next node
        pA = pA === null ? headB : pA.next;

        // When pB reaches end of listB, redirect to headA
        // Otherwise, move to next node
        pB = pB === null ? headA : pB.next;
    }

    return pA; // this is null or node
};


