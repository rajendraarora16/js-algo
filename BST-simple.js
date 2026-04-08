class Node {
  constructor (value) {
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
    }
    else {
      this.insert (this.root, value);
    }
  }

  insert (node, value) {

    // assign to left leaf..
    if (node.value > value) {

      if (!node.left) {
        node.left = new Node(value);
      }
      else {
        this.insert(node.left, value);
      }
    }

    // assign to right leaf..
    else {

      if (!node.right) {
        node.right = new Node(value);
      }
      else {
        this.insert(node.right, value);
      }
    }
  }

  search (target) {

    let node = this.root;

    while (node != null) {

      if (node.value == target) {
        return true;
      }

      if (node.value > target) {
        node = node.left;
      }
      else {
        node = node.right;
      }
    }

    return false;
  }
}

const bst = new BST();

bst.add(40);
bst.add(20);
bst.add(10);
bst.add(6);
bst.add(80);

console.log(bst.search(80))
