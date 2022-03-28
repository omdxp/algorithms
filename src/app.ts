class PriorityNode<T> {
  constructor(public value: T, public priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  private _values: PriorityNode<T>[];
  public get values(): PriorityNode<T>[] {
    return this._values;
  }

  constructor() {
    this._values = [];
  }

  enqueue(value: T, priority: number) {
    let newNode = new PriorityNode(value, priority);
    this._values.push(newNode);
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this._values.length - 1;
    const element = this._values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this._values[parentIndex];
      if (element.priority <= parent.priority) break;
      this._values[parentIndex] = element;
      this._values[index] = parent;
      index = parentIndex;
    }
  }
}

let pq = new PriorityQueue();
