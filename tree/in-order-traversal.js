const inOrderTraversal = (node, result = []) => {
  if (!node) return result;

  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);

  return result;
};
