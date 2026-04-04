# Learn Data Structures & Algorithms

A step-by-step learning guide to master all topics in this handbook.

---

## 📚 Learning Path

### Phase 1: Fundamentals (Week 1-2)

#### 1. Core Concepts

Before diving into specific data structures, understand the basics:

- **[`core-concepts.js`](core-concepts.js)** - Classes, Objects, Nodes
- **[`INTRODUCTION.md`](INTRODUCTION.md)** - Introduction to Data Structures

**Why it matters:** All advanced data structures build upon these fundamentals.

---

### Phase 2: Linear Data Structures (Week 2-3)

#### 2. Linked Lists

Learn about dynamic memory allocation and pointer manipulation.

| File                                                                 | Description        | Complexity         |
| -------------------------------------------------------------------- | ------------------ | ------------------ |
| [`linked-list/singly-link-list.js`](linked-list/singly-link-list.js) | Singly Linked List | O(n) insert/delete |
| [`linked-list/doubly-link-list.js`](linked-list/doubly-link-list.js) | Doubly Linked List | O(n) insert/delete |
| [`linked-list/link-list.md`](linked-list/link-list.md)               | Documentation      |

**What you'll learn:**

- Node creation and pointer manipulation
- Insertion at head, tail, and middle
- Deletion and reversal
- Traversal techniques

**Practice:** Try implementing these methods yourself:

- [ ] `remove(value)` - Remove first occurrence of value
- [ ] `contains(value)` - Check if value exists
- [ ] `toArray()` - Convert to array

---

#### 3. Stack

LIFO (Last In, First Out) data structure.

| File                               | Description          | Complexity    |
| ---------------------------------- | -------------------- | ------------- |
| [`stack/stack.js`](stack/stack.js) | Stack implementation | O(1) push/pop |
| [`stack/stack.md`](stack/stack.md) | Documentation        |

**What you'll learn:**

- Push and pop operations
- Using arrays as underlying structure

**Use cases:** Expression evaluation, function call stack, undo mechanisms

---

#### 4. Queue

FIFO (First In, First Out) data structure.

| File                               | Description          | Complexity           |
| ---------------------------------- | -------------------- | -------------------- |
| [`queue/queue.js`](queue/queue.js) | Queue implementation | O(1) enqueue/dequeue |
| [`queue/queue.md`](queue/queue.md) | Documentation        |

**Use cases:** BFS traversal, task scheduling, print queue

---

### Phase 3: Advanced Linear Structures (Week 3-4)

#### 5. Priority Queue

Queue with priority-based processing.

| File                                                                   | Description    | Complexity               |
| ---------------------------------------------------------------------- | -------------- | ------------------------ |
| [`priority-queue/priority-queue.js`](priority-queue/priority-queue.js) | Priority Queue | O(log n) enqueue/dequeue |
| [`priority-queue/priority-queue.md`](priority-queue/priority-queue.md) | Documentation  |

**What you'll learn:**

- Heap-based implementation
- Priority handling

---

### Phase 4: Trees (Week 4-5)

#### 6. Binary Search Tree (BST)

| File                           | Description        | Complexity       |
| ------------------------------ | ------------------ | ---------------- |
| [`tree/bst.js`](tree/bst.js)   | BST implementation | O(log n) average |
| [`tree/tree.md`](tree/tree.md) | Documentation      |

**Learn in order:**

1. Insert
2. Find/Search
3. Remove (advanced)

**Tree Traversals:**
| File | Description |
|------|-------------|
| [`tree/pre-order-traversal.js`](tree/pre-order-traversal.js) | Root → Left → Right |
| [`tree/in-order-traversal.js`](tree/in-order-traversal.js) | Left → Root → Right |
| [`tree/post-order-traversal.js`](tree/post-order-traversal.js) | Left → Right → Root |

**Advanced:**
| File | Description |
|------|-------------|
| [`tree/breadth-first-search.js`](tree/breadth-first-search.js) | Level-by-level traversal |
| [`tree/second-heighest.js`](tree/second-heighest.js) | Find second largest |

---

### Phase 5: Heaps (Week 5)

#### 7. Heap

Complete binary tree used for priority queues.

| File                           | Description   | Complexity             |
| ------------------------------ | ------------- | ---------------------- |
| [`heap/heap.js`](heap/heap.js) | Max/Min Heap  | O(log n) insert/remove |
| [`heap/heap.md`](heap/heap.md) | Documentation |

**What you'll learn:**

- Binary heap structure
- Bubble up and sink down operations
- Heap sort

---

### Phase 6: Sorting Algorithms (Week 6)

#### Sorting Algorithms Comparison

| Algorithm      | Time (Avg) | Time (Worst) | Space    | Stable |
| -------------- | ---------- | ------------ | -------- | ------ |
| Bubble Sort    | O(n²)      | O(n²)        | O(1)     | ✅     |
| Selection Sort | O(n²)      | O(n²)        | O(1)     | ❌     |
| Insertion Sort | O(n²)      | O(n²)        | O(1)     | ✅     |
| Quick Sort     | O(n log n) | O(n²)        | O(log n) | ❌     |
| Radix Sort     | O(nk)      | O(nk)        | O(n+k)   | ✅     |

**Files:**
| File | Description |
|------|-------------|
| [`sorting/bubble-sort.js`](sorting/bubble-sort.js) | Bubble Sort |
| [`sorting/selection-sort.js`](sorting/selection-sort.js) | Selection Sort |
| [`sorting/insertion-sort.js`](sorting/insertion-sort.js) | Insertion Sort |
| [`sorting/quick-sort.js`](sorting/quick-sort.js) | Quick Sort |
| [`sorting/radix-sort.js`](sorting/radix-sort.js) | Radix Sort |
| [`sorting/soting.md`](sorting/soting.md) | Documentation |

---

### Phase 7: Practice Problems (Week 7+)

| File                                                             | Description              | Concept       |
| ---------------------------------------------------------------- | ------------------------ | ------------- |
| [`practise-question/gcd-lcm.js`](practise-question/gcd-lcm.js)   | GCD/LCM of array         | Number theory |
| [`practise-question/pair-sum.js`](practise-question/pair-sum.js) | Pair sum in sorted array | Two pointers  |

---

## 🎯 Learning Tips

### 1. Code It Yourself

After reading each implementation:

1. Close the file
2. Try to implement it yourself
3. Compare with the reference

### 2. Add Console Logs

```javascript
// Trace through the code
console.log('Step:', currentNode);
```

### 3. Draw It Out

Use paper or a whiteboard to visualize:

- Pointers and connections
- Tree structures
- Array transformations

### 4. Test Edge Cases

```javascript
// Empty data structure
// Single element
// Duplicate values
// Maximum size
```

---

## 📈 Recommended Study Order

```
Week 1: Core Concepts → Linked List
Week 2: Linked List → Stack → Queue
Week 3: Priority Queue → Binary Tree
Week 4: Tree Traversals → BST Operations
Week 5: Heap → Heap Sort
Week 6: All Sorting Algorithms
Week 7+: Practice Problems
```

---

## 🛠️ How to Run

```bash
# Run any file
node linked-list/singly-link-list.js

# Run sorting
node sorting/bubble-sort.js

# Run tree
node tree/bst.js

# Test with your own data
const { LinkedList } = require('./linked-list/singly-link-list.js');
const list = new LinkedList();
list.push(1);
list.push(2);
console.log(list);
```

---

## 📖 Additional Resources

- Big O Notation: Understand time and space complexity
- Data Structure Visualization: [visualgo.net](https://visualgo.net)
- Practice on LeetCode, HackerRank, or GeeksforGeeks

---

**Happy Learning!** 🚀
