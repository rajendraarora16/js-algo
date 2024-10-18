/**
 * Pre order:
 * Root → Left tree → Right tree
 * In order:
 * Left tree → Root → Right tree
 * Post order:
 * Left tree → Right tree → Root
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

    /**
     * Inorder traveral reursive function
     */
    inOrder() {
        let result = [];
        if (this.root == null) {
            return undefined;
        }
        let inOrderTraversal = function (node) {
            result.push(node.value);
            if (node.left) {
                inOrderTraversal(node.left);
            }
            if (node.right) {
                inOrderTraversal(node.right);
            }
        }
        inOrderTraversal(this.root);
        return result;
    }

    /**
     * Post order traversal recursive function
     */
    postOrder() {
        let result = [];
        if (this.root == null) {
            return undefined;
        }

        let postOrderTraversal = function (node) {
            if (node.left) {
                postOrderTraversal(node.left);
            }
            if (node.right) {
                postOrderTraversal(node.right);
            }
            result.push(node.value);
        }
        postOrderTraversal(this.root);
        return result;
    }

    /**
     * search order value
     */
    search (searchVal) {
        let node = this.root;
        let searchFunc = function (node, searchVal) {
            if (node == null) {
                return false;
            }
            else if(searchVal < node.value) {
                return searchFunc(node.left, searchVal);
            }
            else if(searchVal > node.value) {
                return searchFunc(node.right, searchVal);
            }
            else {
                return node.value;
            }
        }
        return searchFunc(node, searchVal)
    }

    /**
     * Get minimum value from the tree
     */
    getMin(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    /**
     * Get maximum value from the tree
     */
    getMax(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }

    /**
     * get Size of the tree
     */
    getSize() {
        return this.size;
    }

    /**
     * Remove element from the BST
     */
    remove (value, node = this.root) {

        let removeRecursive = function(value, node) {
            if (!node) {
                return null;
            }
            /**
             * If value is then root value then go to left subtree
             */
            if (value < node.value) {
                node.left = removeRecursive(value, node.left);
            }
            
            /**
             * If value is greater than root value then go to right subtree
             */
            else if (value > node.value) {
                node.right = removeRecursive(value, node.right);
            }
    
            else {
                /**
                 * If no child node exists then remove the node.
                 */
                if (!node.left && !node.right) {
                    node = null;
                    return node;
                }

                if (!node.left) {
                    return node.left;
                }
    
                else if (!node.right) {
                    return node.right;
                }
    
                else {
                    node.value = this.getMin(node.right);
                    node.right = removeRecursive(node.value, node.right);
                }
            }
            return node;
        }
        return removeRecursive(value, node);
    }
}

let bst = new BST();
bst.add(10);
bst.add(12);
bst.add(14);
bst.add(16);
bst.add(18);
bst.add(60);
bst.add(20);
bst.add(1);


console.log(bst);
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.search(1));
console.log(bst.getMin());
console.log(bst.getMax());
console.log(bst.remove(10));
