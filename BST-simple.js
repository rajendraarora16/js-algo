class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {

  constructor () {
    this.root = null;
  }

  add (value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.insert(this.root, value);
    }
  }

  insert (node, value) {

    // left leaf..
    if (node.value > value) {
      if (!node.left) {
        node.left = new Node(value);
      } 
      else {
        this.insert(node.left, value);
      }
    }
    // right leaf..
    else {
      if (!node.right) {
        node.right = new Node(value);
      }
      else {
        this.insert(node.right, value);
      }
    }
  }
}

const bst = new BST();
bst.add(30);
bst.add(3);
bst.add(40);
bst.add(39);
bst.add(83);
bst.add(300);
