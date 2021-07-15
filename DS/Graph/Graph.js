export class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(V) {
    if (!this.adjList[V]) this.adjList[V] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    while (this.adjList[v].length > 0) {
      const vertex = this.adjList[v];
      this.removeEdge(vertex, v);
    }
    delete this.adjList[v];
  }
}
