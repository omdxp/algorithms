class DoublyNode<T> {
  private _next: DoublyNode<T> | null;
  public get next(): DoublyNode<T> | null {
    return this._next;
  }
  public set next(v: DoublyNode<T> | null) {
    this._next = v;
  }

  private _prev: DoublyNode<T> | null;
  public get prev(): DoublyNode<T> | null {
    return this._prev;
  }
  public set prev(v: DoublyNode<T> | null) {
    this._prev = v;
  }

  constructor(public value: T) {
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private _length: number;
  public get length(): number {
    return this._length;
  }

  private _head: DoublyNode<T> | null;
  public get head(): DoublyNode<T> | null {
    return this._head;
  }
  public set head(v: DoublyNode<T> | null) {
    this._head = v;
  }

  private _tail: DoublyNode<T> | null;
  public get tail(): DoublyNode<T> | null {
    return this._tail;
  }
  public set tail(v: DoublyNode<T> | null) {
    this._tail = v;
  }

  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  push(value: T): DoublyLinkedList<T> {
    let newNode = new DoublyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this._length++;
    return this;
  }

  pop(): DoublyLinkedList<T> {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this._length = 0;
      return this;
    }
    this.tail = this.tail!.prev;
    this.tail!.next = null;
    this._length--;
    return this;
  }

  print() {
    let str = "null <-> ";
    let current = this.head;
    while (current) {
      str += current.value + " <-> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

let list = new DoublyLinkedList();
list.push(1).push(2).push(3).pop().pop();
list.print();
console.log(list.length);
