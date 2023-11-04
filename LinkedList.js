class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* Adding linkedlist value */
    add(data) {
        let newNode = new ListNode(data);

        if (this.head === null) {
            this.head = newNode;
        } else {

            let currentNode = this.head;

            while(!!currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
        this.size++;
    }
}

let node = new LinkedList();
node.add(4);
node.add(5);
node.add(6);

console.log(node);

/**
  Output
 
  LinkedList { 
    head: ListNode { 
        data: 4, 
        next: ListNode { 
            data: 5, 
            next: ListNode { 
                data: 6, 
                next: null 
            } 
        } 
    }, 
    size: 3 
}
 */
