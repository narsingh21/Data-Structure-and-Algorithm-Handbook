//  In bst second heighest have two cases.
//- Parent of largest node in Tree.
//- largest node in left subtree. If there not right subtree.

const secondLargest = (tree) => {
  if (!tree.root || (!tree.root.left && !tree.root.right)) return undefined;

  let parent = tree.root;
  let current = parent.right;

  while (current.right) {
    parent = current;
    current = current.right;
  }

  if (current.left) {
    let temp = current.left;
    while (temp.right) {
      current = current.right;
    }
    return temp.value;
  }

  return parent.value;
};
