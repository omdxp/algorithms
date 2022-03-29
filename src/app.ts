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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");

console.log(g.adjacencyList);
