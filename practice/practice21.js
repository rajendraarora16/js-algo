class BinaryHeap {
    constructor() {
        this.values = [];
    }

    add (element) {
        
        this.values.push(element);

        let index = this.values.length - 1;
        let current = this.values[index];

        while ( index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (parent <= current) {
                this.values[parentIndex] = current;
                this.values[index] = parent;
                index = parentIndex;
            } else {
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
