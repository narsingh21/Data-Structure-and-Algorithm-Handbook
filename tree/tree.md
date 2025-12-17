-------------------------------TREE-------------------------------------------

- A data structure consits of node with parent and child relation.
- It's a non linear data structure.


Terminology:
Root, Child, parent, sibling, Leaf, Edge, 

Use Cases
 - operating system directory.
 - Json 
 - AI
 - HTML DOM
 - Network Roting

 Binary Tree:- binary should contain at most 2 children node.

 Binary Search Tree:-  binary search tree is special case of binary tree. Every node left on parent node should be less then the parent node and right node should be greater then the parent node.

 ** Tree traversal can be done in two ways.
 -BFS(Breadth first search): Visting all the nodes level by level, visting all the neighbour first which are on same level.

 -DFS( Depth first search): It has three common Order.
  Pre Order: Root -> Left ->Right
  In Order: Left-> Root ->Right
  Post Order: Left -> Right-> Root


  | DFS                         | BFS                    |
| --------------------------- | ---------------------- |
| Go deep first               | Go level by level      |
| Uses stack                  | Uses queue             |
| Less memory (balanced tree) | More memory            |
| Good for paths              | Good for shortest path |


* DFS v/s BFS which is better: well the answer for this question is very, what type of tree we have if  it a balanced tree then queue have so much record on it for larger tree. So DFS would be better beacuse it won't treverse tree hall, it goes deeper on left side only.

If there tree is one sided only then BFS would be a better approach where we don't go till the depth.

- Inorder will give us a sorted traversed tree.
- Preorder is can be we are reconstructing the tree using it traversal list.
 