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

  addUnderictedEdge(vertex1: T, vertex2: T) {
    if (!this.checkVertices(vertex1, vertex2)) return;
    this._adjacencyList[vertex1]?.push(vertex2);
    this._adjacencyList[vertex2]?.push(vertex1);
  }

  addDirectedEdge(vertex1: T, vertex2: T) {
    if (!this.checkVertices(vertex1, vertex2)) return;
    this._adjacencyList[vertex1]?.push(vertex2);
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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");
g.addVertex("Berlin");

g.addUnderictedEdge("Tokyo", "San Francisco"); // Undirected graph
g.addDirectedEdge("San Francisco", "Berlin");

console.log(g.adjacencyList);
