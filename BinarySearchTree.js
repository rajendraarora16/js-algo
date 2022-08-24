class Node {
    constructor(value) {
        this.value = value; 
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        if(this.root == null) {
            this.root = new Node(value);
        }

        let insertLeftRight = function(value, root) {
            if (value < root.value) {
                if(root.left == null) {
                    root.left = new Node(value);
                    return ;
                }
                insertLeftRight(value, root.left);
            }

            if (value > root.value) {
                if (root.right == null) {
                    root.right = new Node(value);
                    return ;
                }
                insertLeftRight(value, root.right);
            }
        }

        insertLeftRight(value, this.root)
    }
}

let bst = new BST();
bst.add(10);
bst.add(9);
bst.add(8);
bst.add(11);
bst.add(12);
bst.add(1);

console.log(bst);

