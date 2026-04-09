# Top K Frequent Elements

## Problem Introduction

**Top K Frequent Elements** is a common problem that tests your ability to use hash maps for frequency counting combined with sorting to find the most frequently occurring elements.

### Problem Statement

Given an array of integers and an integer k, return the k most frequent elements. You may return the answer in any order.

**Example:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Explanation:**

- 1 appears 3 times
- 2 appears 2 times
- 3 appears 1 time

The top 2 frequent elements are [1, 2].

### Approach

The solution uses a hash map to count the frequency of each element, then sorts by frequency in descending order and takes the top k elements.

---

## Solution

```javascript
const topKFrequent = (s, k) => {
  const map = {};
  s.forEach((val) => {
    map[val] = map[val] + 1 || 1;
  });

  const result = [];
  Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .forEach(([key, value]) => {
      result.push(Number(key));
    });

  return result;
};
```

### Explanation

1. **Build Frequency Map**: Iterate through the array and count occurrences of each element
2. **Sort by Frequency**: Convert map entries to array and sort in descending order by frequency
3. **Extract Top K**: Take the first k elements from the sorted array
4. **Convert to Output Format**: Push the element values (converted to numbers) to result array

### Complexity

- **Time Complexity**: O(n log n) due to sorting
- **Space Complexity**: O(n) for storing the frequency map
