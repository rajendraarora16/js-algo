/**
 * Binary Search Tree without using any recursion way
 * Using loop/Iterative way
 */

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
        if (this.root == null) {
            this.root = new Node(value);
            return ;
        }

        /**
         * Remember: In recursion way, we also assign it as variable when we create a recursive function 'assignLeftRightLeaf' function.
         * we pass something like assignLeftRightLeaf(value, this.root) => assignLeftRightLeaf = function (value, root) here 'root' becomes assigned value.
         */
        let current = this.root; // <-- Important!! here we need to assign it with some 'variable' 
        while (current) {

            if (value == current.value) {
                return undefined;
            }

            if (value < current.value) {
                if (current.left == null) {
                    current.left = new Node(value);
                    return ;
                }
                current = current.left;
            }
            if (value > current.value)  {
                if (current.right == null) {
                    current.right = new Node(value);
                    return ;
                }
                current = current.right;
            }
        }
    }

    /**
     * In order traversal
     */
    inOrderTraversal () {
        let result = [];
        let current = this.root;
        while (current) {
            if (current.left) {
                current.value = current.left;
            }
            result.push(current.value);
            if (current.right) {
                current.value = current.right;
            }
        }
        return result;
    }

    /**
     * Post order traversal
     */
     postOrderTraversal () {
        let result = [];

        let traverse = function (root) {
            if (root.left) {
                traverse(root.left);
            }
            if (root.right) {
                traverse(root.right);
            }
            result.push(root.value);
        }
        traverse(this.root);
        return result;
    }
}

let bst = new BST();
bst.add(10);
bst.add(9);
bst.add(8);
bst.add(7);
bst.add(11);
bst.add(12);
bst.add(13);
bst.add(10);
bst.add(2);
bst.add(104);


console.log(bst);
console.log(bst.inOrderTraversal());


