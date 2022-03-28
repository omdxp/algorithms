class SinglyNode<T> {
  private _next: SinglyNode<T> | null;
  public get next(): SinglyNode<T> | null {
    return this._next;
  }
  public set next(v: SinglyNode<T> | null) {
    this._next = v;
  }

  constructor(public value: T) {
    this.value = value;
  }
}

export class Queue<T> {
  private _first: SinglyNode<T> | null;
  public get first(): SinglyNode<T> | null {
    return this._first;
  }
  public set first(v: SinglyNode<T> | null) {
    this._first = v;
  }

  private _last: SinglyNode<T> | null;
  public get last(): SinglyNode<T> | null {
    return this._last;
  }
  public set last(v: SinglyNode<T> | null) {
    this._last = v;
  }

  private _size: number;
  public get size(): number {
    return this._size;
  }

  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  enqueue(value: T): number {
    let newNode = new SinglyNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this._size;
  }

  dequeue(): SinglyNode<T> | null {
    if (this.size === 0) return null;
    let removedItem = this.first;
    if (removedItem === this.last) {
      this.last = null;
    }
    this.first = this.first!.next;
    this._size--;
    return removedItem;
  }

  print() {
    let str = " -> ";
    let current = this.first;
    while (current) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}
