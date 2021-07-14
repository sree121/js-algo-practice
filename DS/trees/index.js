import { BinarySearchTree } from './Tree.js';
exports.BinarySearchTree = function() {
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(2);
  bst.insert(6);
  bst.insert(1);
  // bst.find(1);
  const res = bst.DFSPostO();
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
