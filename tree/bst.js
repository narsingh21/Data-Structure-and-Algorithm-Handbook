class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // O(logn) O(n)
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (current.value === val) return undefined;
        if (current.value > val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  // O(logn) O(n)
  find(value) {
    if (!this.root) return false;
    let current = this.root;

    while (current) {
      if (value === current.value) return current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
