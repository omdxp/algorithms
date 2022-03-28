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

class Queue<T> {
  private _head: SinglyNode<T> | null;
  public get head(): SinglyNode<T> | null {
    return this._head;
  }
  public set head(v: SinglyNode<T> | null) {
    this._head = v;
  }

  private _tail: SinglyNode<T> | null;
  public get tail(): SinglyNode<T> | null {
    return this._tail;
  }
  public set tail(v: SinglyNode<T> | null) {
    this._tail = v;
  }

  private _size: number;
  public get size(): number {
    return this._size;
  }

  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  enqueue(value: T): SinglyNode<T> | null {
    let newNode = new SinglyNode(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this._size++;
    return newNode;
  }

  dequeue(): SinglyNode<T> | null {
    if (this.size === 0) return null;
    let removedNode = this.head;
    if (removedNode === this.tail) {
      this.tail = null;
    }
    this.head = this.head!.next;
    this._size--;
    return removedNode;
  }

  print() {
    let str = " -> ";
    let current = this.head;
    while (current) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

let queue = new Queue();

queue.enqueue("First");
queue.enqueue("Second");
queue.dequeue();
queue.print();
console.log(queue.size);
