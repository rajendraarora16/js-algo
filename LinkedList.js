class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
    }

    size () {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getFirstElement() {
        let firstElement = this.head;
        return firstElement.data;
    }

    getLastElement() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
}

let list1 = new ListNode(3);
let list2 = new ListNode(4);
let list3 = new ListNode(5);
let list4 = new ListNode(6);
let list5 = new ListNode(10);

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;

let linkedList = new LinkedList(list1);

console.log(linkedList);
console.log(linkedList.size());
console.log(linkedList.getLastElement());
console.log(linkedList.getFirstElement());

linkedList.clear()

console.log(linkedList);
console.log(linkedList.size());
