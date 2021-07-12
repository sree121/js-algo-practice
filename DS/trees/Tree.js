// insertion olog(n)
// searching olog(n)
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

  find(value) {
    if (this.root === null) return false;
    if (this.root.val === value) return this.root;
    let current = this.root;
    let find = false;
    while (current && !find) {
      console.log(current);
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      } else {
        find = true;
      }
    }
    if (!find) return undefined;
    return current;
  }

  BFS() {
    const data = [];
    const queue = [];
    const node = this.head;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.val);
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
