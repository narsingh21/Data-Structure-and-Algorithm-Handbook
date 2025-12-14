class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;

    return this;
  }

  pop() {
    if (!this.top) return undefined;
    const temp = this.top;
    this.top = temp.next;
    this.size--;
    return temp;
  }
}
