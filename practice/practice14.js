/**
 * LinkedList with JS
 */

class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    size () {
        let count = 0;
        let node = this.head;
        
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }

    firstElement() {
        let firstElm = this.head;
        return firstElm.data;
    }

    lastElement() {
        let lastElement = this.head;
        if (lastElement) {
            while (lastElement.next) {
                lastElement = lastElement.next;
            }
        }
        return lastElement;
    }
}

let list1 = new ListNode(4);
let list2 = new ListNode(24);
let list3 = new ListNode(74);
let list4 = new ListNode(94);
let list5 = new ListNode(9);

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;

let linkedList = new LinkedList(list1);

console.log(linkedList);
console.log(linkedList.size());
console.log(linkedList.firstElement());
console.log(linkedList.lastElement());
