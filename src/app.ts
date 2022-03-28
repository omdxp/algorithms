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

  get(index: number): SinglyNode<T> | null {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.first;
    if (index === this.size - 1) return this.last;
    let current = this.first;
    let counter = 0;
    while (counter <= index) current = current!.next;
    return current;
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
stack.print();
console.log("--", stack.get(1)?.value);

console.log(stack);
