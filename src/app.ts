class WeightedGraph<T extends string | number | symbol> {
  private _adjacencyList: Partial<
    Record<T, Array<{ node: T; weight: number }>>
  >;
  public get adjacencyList(): Partial<
    Record<T, Array<{ node: T; weight: number }>>
  > {
    return this._adjacencyList;
  }

  constructor() {
    this._adjacencyList = {};
  }

  addVertex(vertex: T) {
    if (!this._adjacencyList[vertex]) this._adjacencyList[vertex] = [];
  }

  addEdge(v1: T, v2: T, weight: number) {
    this._adjacencyList[v1]?.push({ node: v2, weight });
    this._adjacencyList[v2]?.push({ node: v1, weight });
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "C", 7);

console.log(g.adjacencyList);
