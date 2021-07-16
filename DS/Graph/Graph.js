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

  DFSR(v) {
    const result = [];
    const visited = {};
    const adj = this.adjList;
    (function dfs(vtx) {
      if (!vtx) return null;
      visited[vtx] = true;
      result.push(vtx);
      adj[vtx].forEach(neighbor => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    })(v);
    return result;
  }

  DFSI(start) {
    const stack = [start];
    const visited = {};
    const result = [];
    let currentV;
    while (stack.length) {
      currentV = stack.pop();
      result.push(currentV);

      this.adjList[start].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
