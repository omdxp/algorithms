class SinglyNode<T> {
  private _next: SinglyNode<T> | null;
  public get next(): SinglyNode<T> | null {
    return this._next;
  }
  public set next(v: SinglyNode<T> | null) {
    this._next = v;
  }

  constructor(public value: T) {
    this.next = null;
  }
}

class SinglyLinkedList<T> {
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

  private _length: number;
  public get length(): number {
    return this._length;
  }

  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  push(value: T): SinglyLinkedList<T> {
    let newNode = new SinglyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this._length++;
    return this;
  }

  pop(): SinglyLinkedList<T> {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this._length = 0;
      return this;
    }
    let current = this.head;
    let newTail = current;
    while (current?.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail!.next = null;
    this._length--;
    return this;
  }

  shift(): SinglyLinkedList<T> {
    if (this._length === 0) {
      this.tail = null;
      return this;
    }
    let current = this.head;
    this.head = current!.next;
    this._length--;
    return this;
  }

  unshift(value: T): SinglyLinkedList<T> {
    let newNode = new SinglyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this._length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this._length++;
    return this;
  }

  get(index: number): SinglyNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: T) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    let newNode = new SinglyNode(value);
    let prev = this.get(index - 1);
    let temp = prev!.next;
    prev!.next = newNode;
    newNode.next = temp;
    this._length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }

    let prev = this.get(index - 1);
    prev!.next = prev!.next!.next;
    this._length--;
    return true;
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }
}

var list = new SinglyLinkedList();
list.push(3).push("Omar").push(19).push(1998).pop().shift().unshift("Yasser");
list.set(1, "hello");
list.insert(1, "Omar");
list.remove(2);
list.print();
console.log(list.length);

console.log(list.get(-1)?.value);
