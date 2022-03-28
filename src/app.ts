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
}

let tree = new BinarySearchTree();
tree.root = new BinaryNode(10);
tree.root.right = new BinaryNode(15);
tree.root.left = new BinaryNode(7);
tree.root.left.right = new BinaryNode(9);

console.log(tree);
