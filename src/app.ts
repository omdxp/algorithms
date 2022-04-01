import { PriorityQueue } from "./priority-queue";

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
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("E", "D", 4);
g.addEdge("E", "F", 1);
g.addEdge("F", "D", 1);
g.addEdge("F", "C", 4);
g.addEdge("D", "C", 2);

console.log(g.adjacencyList);
