/**
 * Priority Queue Implementation using Min Binary Heap
 * Time Complexity: O(log n) for enqueue and dequeue
 * Space Complexity: O(n)
 *
 * A priority queue is a queue where elements are dequeued based on their priority
 * (lowest priority value = higher priority in this implementation)
 */

class PriorityQueueNode {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // O(log n) - Add element with priority
  enqueue(val, priority) {
    const newNode = new PriorityQueueNode(val, priority);
    this.values.push(newNode);

    // Bubble up to maintain heap property
    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      // Swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // O(log n) - Remove element with highest priority (lowest priority value)
  dequeue() {
    if (this.values.length === 0) return undefined;

    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Test
const pq = new PriorityQueue();
pq.enqueue('task 1', 3);
pq.enqueue('task 2', 1);
pq.enqueue('task 3', 2);

console.log(pq.dequeue().value); // task 2 (priority 1)
console.log(pq.dequeue().value); // task 3 (priority 2)
console.log(pq.dequeue().value); // task 1 (priority 3)

module.exports = { PriorityQueue };
