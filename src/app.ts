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
}

let tree = new BinarySearchTree();
// tree.root = new BinaryNode(10);
// tree.root.right = new BinaryNode(15);
// tree.root.left = new BinaryNode(7);
// tree.root.left.right = new BinaryNode(9);

tree.insert(10)?.insert(15)?.insert(7)?.insert(9)?.insert(10);

console.log(tree);
