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

    /**
     * BST add values in tree
     * 
     * @param {*} value 
     * @returns 
     */
    add(value) {
        if (this.root == null) {
            this.root = new Node(value);
            return ;
        }

        let insertLefRightChild = function(value, root) {
            if (root.value > value) {
                if(root.left == null) {
                    root.left = new Node(value);
                    return ;
                }
                insertLefRightChild(value, root.left);
            }
            if (root.value < value) {
                if(root.right == null) {
                    root.right = new Node(value);
                    return ;
                }
                insertLefRightChild(value, root.right);
            }
        }
        insertLefRightChild(value, this.root);
    }

    /**
     * In order traversal function
     * @returns in order traversal order
     */
    inOrderTraversal() {
        let visitedValue = [];

        let traverse = function(root) {
            if(root == null) {
                return ;
            }
            if(root.left) {
                traverse(root.left);
            }
            visitedValue.push(root.value);
            if(root.right) {
                traverse(root.right);
            }
        }
        traverse(this.root);

        return visitedValue;
    }
}


let bst = new BST();

bst.add(10);
bst.add(9);
bst.add(8);
bst.add(7);
bst.add(11);
bst.add(2);
bst.add(12);
bst.add(13);

console.log(bst.inOrderTraversal())
