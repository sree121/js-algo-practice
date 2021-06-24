export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
