import { Graph } from './Graph.js';
exports.Graph = function() {
  const g = new Graph();
  // bst.find(1);
  g.addVertex('DEL');
  g.addVertex('BEN');
  g.addVertex('CHN');
  g.addVertex('HYD');
  g.addEdge('DEL', 'BEN');
  g.addEdge('DEL', 'CHN');
  const res = g.DFSI('DEL');
  console.log(res);
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
