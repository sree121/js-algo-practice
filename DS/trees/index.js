import { BinarySearchTree } from './Tree.js';
exports.BinarySearchTree = function() {
  const bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(201);
  bst.insert(1);
  bst.find(20);
  const res = bst;
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
