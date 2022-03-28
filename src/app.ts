class MaxBinaryHeap<T> {
  private _values: T[];
  public get values(): T[] {
    return this._values;
  }

  constructor(values: T[]) {
    this._values = values;
  }

  insert(value: T) {
    this._values.push(value);
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this._values.length - 1;
    let element = this._values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this._values[parentIndex];
      if (element <= parent) break;
      this._values[parentIndex] = element;
      this._values[index] = parent;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap.values);
