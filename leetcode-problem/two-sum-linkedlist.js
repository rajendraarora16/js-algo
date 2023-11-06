/**
 * Problem:
 * 
 * Example 1:
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (l1, l2) => {
    let sum = 0;
    let carry = 0;
    let pointer;
    let currentNode = pointer = new ListNode(0);

    while (l1 || l2) {
        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }

        else if (l1) {
            sum = l1 + carry;
            l1 = l1.next;
        }

        else if (l2) {
            sum = l2 + carry;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10)
        sum = Math.floor(sum) % 10;
        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;

        if (carry === 1) {
            currentNode.next = new ListNode(carry);
        }
    }

    return pointer.next;
}


let l1 = new ListNode(2);
let l1_2 = new ListNode(4);
let l1_3 = new ListNode(3);

l1.next = l1_2;
l1_2.next = l1_3;

let l2 = new ListNode(5);
let l2_2 = new ListNode(6);
let l2_3 = new ListNode(4);

l2.next = l2_2;
l2_2.next = l2_3;


console.log("ss:", l1);
console.log("ss:", l2);

console.log(addTwoNumbers(l1, l2))

