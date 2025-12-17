const postOrderTraversal = (root, result = []) => {
  //recursive
  if (!root) return result;

  if (root.left) postOrderTraversal(root.left, result);
  if (root.right) postOrderTraversal(root.right, result);
  result.push(root.value);

  return result;
};

// iterative approach with 2 stack, one stack for storing the node and other is for reverse the order.

const postOrderTraversalIterative = (root) => {
  const stack1 = [];
  const stack2 = [];
  const result = [];

  stack1.push(root);

  while (stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node);

    if (stack1.length) stack1.push(node.left);
    if (stack2.length) stack2.push(node.left);
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().value);
  }

  return result;
};
