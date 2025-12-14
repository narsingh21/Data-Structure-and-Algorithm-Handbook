// Breadth before depth

const BreadthFirstSearch = (tree) => {
  const queue = [];
  const visited = [];
  queue.push(tree.root);
  while (queue.length > 0) {
    const temp = queue.shift();
    visited.push[temp.value];
    if (temp.left) {
      queue.push[temp.left];
    }
    if (temp.right) {
      queue.push[temp.right];
    }
  }

  return visited;
};
