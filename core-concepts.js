/**
 * Core Concepts for Data Structures
 *
 * This file contains fundamental building blocks used throughout this handbook.
 */

// ============================================
// CLASS - Blueprint for Objects
// ============================================

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Instance Method - invoked by class instances (objects)
  fullName() {
    return `Full name of student ${this.firstName} ${this.lastName}`;
  }

  // Static Method - utility function executed by the class only
  static studentList(...students) {
    return students;
  }
}

// Create instance
const student1 = new Student('John', 'Smith');
console.log(student1.fullName()); // "Full name of student John Smith"

// Call static method on class (not instance)
const students = Student.studentList(student1);
console.log(students);

// ============================================
// NODE - Building Block for Linked Structures
// ============================================

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Create a node
const newNode = new Node('demo node');
console.log(newNode.val); // 'demo node'
console.log(newNode.next); // null

// Create node with next pointer
const secondNode = new Node('second node', newNode);
console.log(secondNode.val); // 'second node'
console.log(secondNode.next.val); // 'demo node'

// ============================================
// OBJECT - Collection of data in key-value pairs
// ============================================

const student = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
  grades: [85, 90, 78],
};

console.log(student.firstName); // 'John'
console.log(student['lastName']); // 'Smith'

module.exports = { Student, Node };
