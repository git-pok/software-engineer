// Fix 1
// class BinaryTree {
//   constructor(root = null, left, right) {
//     this.root = root;
//     this.left = left;
//     this.right = right;
//   }
// }

/** OG BinaryTreeNode: node for a general tree. */
// class BinaryTreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

/** I had to create a new Binary Tree Structure. */
/** NEW BinaryTreeNode: node for a general tree. */
// const newTree = new BinaryTreeNodes(1, 2, 3,  new BinaryTreeNodes(2, 3, 4, [3, 4], [5, 6]), new BinaryTreeNodes(3, 2, 3, [5, 6], [7, 8]));
// const newTreeII = new BinaryTreeNodes(1, 2, 3,  new BinaryTreeNodes(2, 3, 4, [3, 4], [5, 6]), [6, 7]);
class BinaryTreeNodes {
  constructor(parent = null, left = null, right = null, leftNodes = [], rightNodes = []) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.leftChildren = leftNodes;
    this.rightChildren = rightNodes;
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    let treeLgth = 0;
    const toIterateQueue = [this.root];
    // console.log("toIterateQueue", toIterateQueue);
    if (!toIterateQueue[0].parent) return 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.shift();
      // console.log("current", current);
      // console.log("current left", current.left);
      // console.log("current right", current.right);
      if (!current.parent || !current.parent) return treeLgth;
      treeLgth++;
      toIterateQueue.push(current.leftChildren, current.rightChildren);
    }
    return treeLgth;
  }

  // minDepth() {
  //   let treeLgth = 0;
  //   const toIterateQueue = [this.root];
  //   // console.log("toIterateQueue", toIterateQueue);
  //   if (toIterateQueue[0] === null) return 0;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.shift();
  //     // if (current.val) delete current.val;
  //     console.log("current", current);
  //     console.log("current left", current.left);
  //     console.log("current right", current.right);
  //     if (typeof current.left !== "object" || typeof current.right !== "object") return treeLgth;
  //     toIterateQueue.push({left: current.left.left, right: current.right.right});
  //     treeLgth++;
  //   }
  //   return treeLgth;
  // }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}
// The binary structure is wrong and inefficient.
// This logic shows how the val prop breaks the left and right traits.
// const binaryNodes = new BinaryTreeNode("binary", new BinaryTreeNode("binary", new BinaryTreeNode(1, 2, 3), new BinaryTreeNode(1, 2, 3)), 3);
// const binaryNodes = new BinaryTreeNode(1,
  // new BinaryTreeNode(1, 2, 3), new BinaryTreeNode(3, new BinaryTreeNode(3, 2, 1), 4));
// const lgBinaryNodes = new BinaryTreeNode(3, new BinaryTreeNode(5, new BinaryTreeNode(5, 5, 6), new BinaryTreeNode(3, 5, 6)), new BinaryTreeNode(5, new BinaryTreeNode(5, 6, 7), new BinaryTreeNode(3, 5, 6)));
// const binaryNodesLg = new BinaryTreeNode("binary", new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3, 4, new BinaryTreeNode(5, 6, 7)), 8), 9), new BinaryTreeNode(2, new BinaryTreeNode(5, new BinaryTreeNode(5, 6, 7), 8), 9));
// const binaryNodesMed = new BinaryTreeNode("binary", new BinaryTreeNode(1, new BinaryTreeNode(3, new BinaryTreeNode(5, 6, new BinaryTreeNode(7, 8, 9)), 4), 4), new BinaryTreeNode(2, 3, 4));
// const binaryNodesSm = new BinaryTreeNode("binary", new BinaryTreeNode(1, new BinaryTreeNode(3, new BinaryTreeNode(5, 6, 7), 4), 4), 2);
// const newBinaryTree = new BinaryTree(binaryNodes);

// const binaryNodes = new BinaryTreeNode("binary",
//     new BinaryTreeNode(1,
//     new BinaryTreeNode(2,
//     new BinaryTreeNode(3, 4, new BinaryTreeNode(5, 6, 7)),
//         new BinaryTreeNode(5, 6, 7)),
//         new BinaryTreeNode(5, 6, 7)),
//           new BinaryTreeNode(2,
//           new BinaryTreeNode(5,
//           new BinaryTreeNode(5, 6, 7),
//           new BinaryTreeNode(5, 6, 7)),
//           new BinaryTreeNode(5, 6, 7)));


module.exports = { BinaryTree, BinaryTreeNodes };
