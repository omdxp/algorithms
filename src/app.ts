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
      if (element.priority >= parent.priority) break;
      this._values[parentIndex] = element;
      this._values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this._values[0];
    const end = this._values.pop();
    if (this._values.length > 0) {
      this._values[0] = end!;
      this.sinkDown();
    }
    return min;
  }

  private sinkDown() {
    let index = 0;
    const length = this._values.length;
    const element = this._values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: PriorityNode<T>, rightChild: PriorityNode<T>;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this._values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this._values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild!.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this._values[index] = this._values[swap];
      this._values[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
