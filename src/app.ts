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

  dijkstra(start: T, end: T): T[] {
    // build up initial state
    let [nodes, distances, previous] = this.initState(start);

    // as long as there is something to visit
    let path: T[] = [];
    let smallest: T = start;
    while (nodes.values.length) {
      smallest = nodes.dequeue()!.val;
      if (smallest === end) {
        // we are done
        // build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest]!;
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this._adjacencyList[smallest]) {
          // find neighboring node
          let nextNode: { node: T; weight: number } =
            this._adjacencyList[smallest]![neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest]! + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

  private initState(
    start: T
  ): [
    PriorityQueue<T>,
    Partial<Record<T, number>>,
    Partial<Record<T, T | null>>
  ] {
    let pq = new PriorityQueue<T>();
    let distances: Partial<Record<T, number>> = {};
    let previous: Partial<Record<T, T | null>> = {};
    for (const key in this._adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        pq.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        pq.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    return [pq, distances, previous];
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

let path = g.dijkstra("A", "E");
console.log(path);
