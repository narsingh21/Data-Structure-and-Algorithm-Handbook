# Data Structure and Algorithm Handbook

## What is Data Structure?

Data structures are collection of values. These values have relationships between them. Here we create different data structures using classes and constructor functions.

---

## 1. Class

A class is a blueprint for objects. It helps us to create objects with some properties and methods.

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `Full name of student ${this.firstName} ${this.lastName}`;
  }

  static studentList(...students) {
    return students;
  }
}
```

### Object

An object is a collection of data stored in key-value pairs.

```javascript
const student = {
  firstName: 'John',
  lastName: 'Smith',
};
```

### Types of Methods

**Instance Methods:**

- Methods that are invoked by class instances (objects)
- Can access instance properties using `this`

```javascript
const student1 = new Student('John', 'Smith');
student1.fullName(); // "Full name of student John Smith"
```

**Static Methods:**

- Static methods execute on the class only
- They are utility functions for specific tasks
- Cannot access instance properties

```javascript
Student.studentList(); // Called on class, not instance
```

---

## 2. Node (Building Block for Linked Structures)

```javascript
function Node(val, next) {
  this.val = val ? val : null;
  this.next = next ? next : null;
}

const newNode = new Node('demo node');
```

The `Node` class is the fundamental building block for:

- Linked Lists
- Stacks
- Queues
- Trees
- Graphs

---

## Project Structure

This handbook contains implementations of various data structures and algorithms:

### Data Structures

- **Linked List** - Singly and doubly linked lists
- **Stack** - LIFO (Last In, First Out)
- **Queue** - FIFO (First In, First Out)
- **Priority Queue** - Queue with priority-based processing
- **Heap** - Min/Max heap implementation
- **Tree** - Binary Search Tree (BST) and traversals

### Sorting Algorithms

- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Radix Sort

### Practice Questions

- GCD/LCM calculations
- Pair sum problems
- Breadth-First Search
- Tree traversals
