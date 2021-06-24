import { Tree } from './Tree.js';
exports.Tree = function() {
  const tree = new Tree();
  console.log(tree);
  const res = tree;
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
