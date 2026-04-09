# Group Anagrams

## Problem Introduction

**Group Anagrams** is a classic string manipulation problem that tests your understanding of hash maps and character counting.

### What are Anagrams?

Anagrams are words or phrases that contain the same letters in the same quantity, but in a different order. For example:

- "eat", "ate", and "tea" are anagrams
- "listen" and "silent" are anagrams
- "hello" and "olleh" are anagrams

### Problem Statement

Given an array of strings, group all the anagrams together. You can return the answer in any order.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
```

### Approach

The key insight is that all anagrams have the same character frequency count. We can use this as a unique key in our hash map:

1. Create a character count array (26 letters for lowercase English alphabet)
2. Convert the count array to a string key
3. Use this key to group anagrams together in a hash map

---

## Solution

```javascript
const groupAnagram = (s) => {
  const result = {};
  s.forEach((str) => {
    const count = new Array(26).fill(0);
    for (let c of str) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    const key = count.join(',');
    if (!result[key]) result[key] = [];

    result[key].push(str);
  });

  return Object.values(result);
};
```

### Explanation

- **Time Complexity**: O(n \* k) where n is the number of strings and k is the average length of each string
- **Space Complexity**: O(n \* k) for storing the result
