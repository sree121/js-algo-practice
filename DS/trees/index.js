import { BinarySearchTree } from './Tree.js';
exports.BinarySearchTree = function() {
  const bst = new BinarySearchTree();
  bst.insert(1);
  bst.insert(2);
  bst.insert(3);
  bst.insert(4);
  // bst.find(1);
  const res = bst.BFS();
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
