class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1) - add at end
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // O(n) - remove last
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = null;

    // stop at last node
    while (current.next) {
      prev = current;
      current = current.next;
    }

    // current = tail (node to remove)
    // prev = second last (or null if length = 1)
    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      // only one node
      this.head = null;
      this.tail = null;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // removed node
  }

  // O(1) - remove first
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    oldHead.next = null; // optional cleanup
    return oldHead;
  }

  // O(1) - add at beginning
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // O(n) - get node at index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  // O(n) - set value at index
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;

    node.value = val;
    return true;
  }

  // O(n) - insert at index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const prev = this.get(index - 1);
    const newNode = new Node(val);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  // O(n) - remove at index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    removed.next = null;
    this.length--;

    return removed;
  }

  // O(n) - reverse list in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next; // save next
      node.next = prev; // reverse pointer
      prev = node; // move prev forward
      node = next; // move node forward
    }

    return this;
  }
}

// Test
const list = new SinglyLinkedList();
list.push('25');
list.push('6');
list.push('45');

console.log(list.head.value); // '25'
console.log(list.tail.value); // '45'
