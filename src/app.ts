import { Queue } from "./queue";

class BinaryNode<T> {
  private _right: BinaryNode<T> | null;
  public get right(): BinaryNode<T> | null {
    return this._right;
  }
  public set right(v: BinaryNode<T> | null) {
    this._right = v;
  }

  private _left: BinaryNode<T> | null;
  public get left(): BinaryNode<T> | null {
    return this._left;
  }
  public set left(v: BinaryNode<T> | null) {
    this._left = v;
  }

  constructor(public value: T) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree<T> {
  private _root: BinaryNode<T> | null;
  public get root(): BinaryNode<T> | null {
    return this._root;
  }
  public set root(v: BinaryNode<T> | null) {
    this._root = v;
  }

  constructor() {
    this.root = null;
  }

  insert(value: T): BinarySearchTree<T> | null {
    let newNode = new BinaryNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else {
        return null;
      }
    }
    return this;
  }

  contains(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }
    return false;
  }

  find(value: T): BinaryNode<T> | null {
    let current = this.root;
    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return current;
      }
    }
    return null;
  }

  breadthFirstSearch(): Array<BinaryNode<T>> {
    if (this.root === null) return [];
    let queue = new Queue<BinaryNode<T>>();
    let visited: Array<BinaryNode<T>> = [];
    queue.enqueue(this.root!);
    while (queue.size > 0) {
      let current = queue.dequeue();
      visited.push(current?.value!);
      if (current?.value.left) queue.enqueue(current.value.left);
      if (current?.value.right) queue.enqueue(current.value.right);
    }
    return visited;
  }

  depthFirstSearchPreOrder(): Array<BinaryNode<T>> {
    if (this.root === null) return [];
    let visited: Array<BinaryNode<T>> = [];
    (function traverse(node: BinaryNode<T>) {
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);
    return visited;
  }

  depthFirstSearchPostOrder(): Array<BinaryNode<T>> {
    if (this.root === null) return [];
    let visited: Array<BinaryNode<T>> = [];
    (function traverse(node: BinaryNode<T>) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node);
    })(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(10)?.insert(6)?.insert(3)?.insert(8)?.insert(15)?.insert(20);

console.log(tree.breadthFirstSearch().map((el) => el.value));
console.log(tree.depthFirstSearchPreOrder().map((el) => el.value));
console.log(tree.depthFirstSearchPostOrder().map((el) => el.value));
