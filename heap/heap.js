// For inserting in binary heap, push the value in array then check it less then its parent node and swap them(bubble up).

// - swap the max(root node) to the last node of the heap.
// - Remove that last Node.
// - swap the largest child of root node then swap it. follow the same till the heap is balances(sink down).

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  //o(logn)
  insert(val) {
    this.heap.push(val);
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] <= this.heap[parentIndex]) break;

      // swap
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex;
    }

    return this;
  }

  remove() {
    if (this.heap.length === 0) return undefined;

    // swap root with last
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    const max = this.heap.pop();
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];

      index = largest;
    }

    return max;
  }
}
