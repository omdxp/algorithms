export class PriorityQueue<T extends string | number | symbol> {
  private _values: { val: T; priority: number }[];
  public get values(): { val: T; priority: number }[] {
    return this._values;
  }

  constructor() {
    this._values = [];
  }

  enqueue(val: T, priority: number) {
    this._values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this._values.shift();
  }

  private sort() {
    this._values.sort((a, b) => a.priority - b.priority);
  }
}
