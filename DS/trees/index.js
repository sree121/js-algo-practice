import { BinarySearchTree } from './Tree.js';
exports.BinarySearchTree = function() {
  const binarySearchTree = new BinarySearchTree();
  console.log(binarySearchTree);
  const res = binarySearchTree;
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
