class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert (element) {

        this.heap.push(element);

        let index = this.heap.length - 1;
        let current = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent <= current) {
                this.heap[parentIndex] = current;
                this.heap[index] = parent;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    getMin () {
        return this.heap[1];
    } 
}

let tree = new BinaryHeap();
tree.insert(13);
tree.insert(1);
tree.insert(3);
tree.insert(30);
tree.insert(17);
tree.insert(10);

console.log(tree);

console.log(tree.getMin());
