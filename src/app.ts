class Graph<T extends string | number | symbol> {
  private _adjacencyList: Partial<Record<T, Array<T>>>;
  public get adjacencyList(): Partial<Record<T, Array<T>>> {
    return this._adjacencyList;
  }

  constructor() {
    this._adjacencyList = {};
  }

  addVertex(value: T) {
    if (!this._adjacencyList[value]) this._adjacencyList[value] = [];
  }

  addEdge(vertex1: T, vertex2: T, type: "direct" | "undirect") {
    if (!this.checkVertices(vertex1, vertex2)) return;
    this._adjacencyList[vertex1]?.push(vertex2);
    type === "undirect" && this._adjacencyList[vertex2]?.push(vertex1);
  }

  removeEdge(vertex1: T, vertex2: T, type: "direct" | "undirect") {
    if (!this.checkEdge(vertex1, vertex2, type)) return;
    this._adjacencyList[vertex1] = this._adjacencyList[vertex1]?.filter(
      (v) => v !== vertex2
    );
    type === "undirect"
      ? (this._adjacencyList[vertex2] = this._adjacencyList[vertex2]?.filter(
          (v) => v !== vertex1
        ))
      : null;
  }

  removeVertex(vertex: T) {
    if (!this.checkVertex(vertex)) return;
    while (this._adjacencyList[vertex]?.length) {
      const adjacentVertex = this._adjacencyList[vertex]!.pop()!;
      this.removeEdge(adjacentVertex, vertex, "direct");
    }
    delete this._adjacencyList[vertex];
  }

  private checkVertices(vertex1: T, vertex2: T): boolean {
    let foundVertex1 = Object.prototype.hasOwnProperty.call(
      this._adjacencyList,
      vertex1
    );
    let foundVertex2 = Object.prototype.hasOwnProperty.call(
      this._adjacencyList,
      vertex2
    );
    return foundVertex1 && foundVertex2;
  }

  private checkVertex(vertex: T): boolean {
    return Object.prototype.hasOwnProperty.call(this._adjacencyList, vertex);
  }

  private checkEdge(
    vertex1: T,
    vertex2: T,
    type: "direct" | "undirect"
  ): boolean {
    if (!this.checkVertices(vertex1, vertex2)) return false;
    let result =
      type === "direct"
        ? this._adjacencyList[vertex1]!.includes(vertex2)
        : this._adjacencyList[vertex1]!.includes(vertex2) &&
          this._adjacencyList[vertex2]!.includes(vertex1);
    return result;
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");
g.addVertex("Berlin");

g.addEdge("Tokyo", "San Francisco", "undirect"); // Undirected graph
g.addEdge("San Francisco", "Berlin", "direct");

// g.removeEdge("Tokyo", "San Francisco", "undirect");
// g.removeEdge("San Francisco", "Berlin", "direct");

g.removeVertex("Tokyo");

console.log(g.adjacencyList);
