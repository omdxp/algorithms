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
    this.next = null;
  }
}

class Stack<T> {
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

  push(value: T): number {
    let newNode = new SinglyNode(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let prevFirst = this.first;
      this.first = newNode;
      this.first.next = prevFirst;
    }
    return ++this._size;
  }

  pop(): number | null {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = temp!.next;
    }
    return --this._size;
  }

  print() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let stack = new Stack(); // LIFO

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.print();
console.log(stack);
