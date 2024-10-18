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

    inOrder() {
        if (this.root == null) {
            return undefined;
        }
        let stack = [];
        let result = [];
        let node = this.root;


        while (stack.length > 0) {
            if (node !== null) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                result.push(node);
                node = node.right;
            }
        }
        return result;
    }

    searchValue (searchValue) {
        let current = this.root;

        while (!!current) {
            if (current.value == searchValue) {
                return true;
            }

            if (current.value > searchValue) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

/**
     * In order traversal using iterative
     */
 let inOrderTraversal = function (node) {

    if (node == null) {
        return undefined;
    }

    let stack = [node];
    let result = [];

    while (stack.length > 0) {
        node = stack.shift();
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
        result.push(node.value);        
    }
    return result;
}

let bst = new BST();
bst.add(12);
bst.add(6);
bst.add(4);

console.log(bst);
console.log(bst.inOrder());

console.log(bst.searchValue(12));

// let node = new Node(10);
// node.left = new Node(1);
// node.left.left = new Node(9);
// node.left.left.left = new Node(8);
// node.right = new Node(11);
// node.right.right = new Node(12)

// [ 10, 9, 8, 1, 11, 12 ]


console.log(node);
console.log(inOrderTraversal(node));


