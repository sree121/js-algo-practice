export class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(ver) {
    if (!this.adjList[ver]) this.adjList[ver] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
  }
}
