/**
 * Selection Sort Implementation
 * Time Complexity: O(n²) - worst, average, and best case
 * Space Complexity: O(1) - in-place sorting
 *
 * Algorithm:
 * 1. Find the minimum element in the unsorted portion
 * 2. Swap it with the first unsorted element
 * 3. Move the boundary between sorted and unsorted one position right
 * 4. Repeat until entire array is sorted
 */

const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find minimum element in unsorted portion
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap minimum element with first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

// Test
const arr = [64, 25, 12, 22, 11];
console.log('Original:', arr);
console.log('Sorted:', selectionSort([...arr]));

module.exports = { selectionSort };
