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

    remove(data) {
        
        let currentNode = this.head;
        let previousNode;

        if (currentNode.data === data) {
            this.head = currentNode.next;
        } else {

            while (currentNode.data !== data) {

                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.size--;
    }
}

let node = new LinkedList();
node.add(4);
node.add(5);
node.add(6);

console.log(node);

node.remove(5);

console.log(node);
