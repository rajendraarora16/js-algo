/**
 * Binary heap algorithm
 */

class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    add (elemenet) {
        
        this.heap.push(elemenet);

        let index = this.heap.length - 1;
        let current = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent <= current) {
                this.heap[parentIndex] = current;
                this.heap[index] = parent;
                index = parentIndex;
            } 
            else {
                break;
            }
        }
    }
}

let tree = new BinaryHeap();
tree.add(13);
tree.add(1);
tree.add(3);
tree.add(30);
tree.add(17);
tree.add(10);

console.log(tree);
