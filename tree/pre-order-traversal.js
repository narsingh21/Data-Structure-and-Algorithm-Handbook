// Pre order traversal, traverse the root first then the left subtree
// and then right subtree.

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function preOrderTriversal(root, result = []) {
  if (!root) return result;
  result.push[root];
  preOrderTriversal(root.left, result);
  preOrderTriversal(root.right, result);
  return result;
}

// iterative approach

const preOrderTraversal = (root) => {
  if (!root) return undefined;

  const stack = [];
  const result = [];

  while (stack.length > 0) {
    const temp = stack.pop();
    result.push(temp);
    if (temp.right) result.push(temp.right);
    if (temp.left) result.push(temp.left);
  }

  return result;
};
