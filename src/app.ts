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

  shift(): DoublyLinkedList<T> {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this._length = 0;
      return this;
    }
    this.head = this.head!.next;
    this.head!.prev = null;
    this._length--;
    return this;
  }

  unshift(value: T): DoublyLinkedList<T> {
    let newNode = new DoublyNode(value);
    if (this.length === 0) {
      return this.push(value);
    }
    this.head!.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this._length++;
    return this;
  }

  get(index: number): DoublyNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let counter = 0;
      var current = this.head;
      while (counter !== index) {
        current = current!.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      var current = this.tail;
      while (counter !== index) {
        current = current!.prev;
        counter--;
      }
    }
    return current;
  }

  set(index: number, value: T): DoublyNode<T> | null {
    let foundNode = this.get(index);
    if (foundNode === null) return null;
    foundNode.value = value;
    return foundNode;
  }

  insert(index: number, value: T): DoublyNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      this.unshift(value);
      return new DoublyNode(value);
    }
    if (index === this.length) {
      this.push(value);
      return new DoublyNode(value);
    }
    let beforeNode = this.get(index - 1);
    let newNode = new DoublyNode(value);
    let afterNode = beforeNode!.next;
    beforeNode!.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode!.prev = newNode;
    this._length++;
    return newNode;
  }

  remove(index: number): boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    let removedNode = this.get(index)!;
    removedNode.prev!.next = removedNode.next;
    removedNode.next!.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this._length--;
    return true;
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
list.push(1).push(2).push(3).push(4);
list.set(1, 500);
list.insert(1, 401);
list.remove(3);
list.print();
console.log(list.length);
console.log(list.get(2)?.value);
