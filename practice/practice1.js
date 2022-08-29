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
    
    insert (value) {
        if (this.root == null) {
            this.root = new Node(value);
            return ;
        }

        /**
         * Recursive starts here
         */
        let insertLeftRightLeaf = function (value, root) {
            if (root.value > value) {
                if (root.left == null) {
                    root.left = new Node(value);
                    return ;
                }
                insertLeftRightLeaf(value, root.left);
            }

            if (root.value < value) {
                if (root.right == null) {
                    root.right = new Node(value);
                    return ;
                }
                insertLeftRightLeaf(value, root.right);
            }
        }
        insertLeftRightLeaf(value, this.root);
    }

    insertRecursively (value) {
        if (this.root == null) {
            this.root = new Node(value);
            return ;
        }

        /**
         * Without recursive function
         */
        let current = this.root;

        while (current) {
            if (current.value > value) {
                if (current.left == null) {
                    current.left = new Node(value);
                    return ;
                }
                current = current.left;
            }

            if (current.value < value) {
                if (current.right == null) {
                    current.right = new Node(value);
                    return ;
                }
                current = current.right;
            }
        }
    }
}

let bst = new BST();

bst.insertRecursively(20);
bst.insertRecursively(15);
bst.insertRecursively(10);
bst.insertRecursively(22);
bst.insertRecursively(23);
bst.insertRecursively(9);
bst.insertRecursively(25);

console.log(bst);
