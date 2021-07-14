import { Graph } from './Graph.js';
exports.Graph = function() {
  const bst = new Graph();
  // bst.find(1);
  const res = 'bst.DFSPostO()';
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
