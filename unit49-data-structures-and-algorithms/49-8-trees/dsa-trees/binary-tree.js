/** OG BinaryTreeNode: node for a general tree. */
// class BinaryTreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

/** I had to create a new Binary Tree Structure. */
/**
 * Old Solution
 * BinaryTreeNode: node for a general tree.
 * */
// const newTree = new BinaryTreeNodes(1, 2, 3,  new BinaryTreeNodes(2, 3, 4, [3, 4], [5, 6]), new BinaryTreeNodes(3, 2, 3, [5, 6], [7, 8]));
// const newTreeII = new BinaryTreeNodes(1, 2, 3,  new BinaryTreeNodes(2, 3, 4, [3, 4], [5, 6]), [6, 7]);
// class BinaryTreeNodes {
//   constructor(parent = null, left = null, right = null, leftNodes = [], rightNodes = []) {
//     this.parent = parent;
//     this.left = left;
//     this.right = right;
//     this.leftChildren = leftNodes;
//     this.rightChildren = rightNodes;
//   }
// }

/** I had to create a new Binary Tree Structure. */
/** NEW BinaryTreeNodes: node for a general tree. */
class BinaryTreeNodes {
  constructor(parent, left, right, branch, children=[]) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.branch = branch;
    this.children = children;
    }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    const toIterateQueue = [this.root];
    let lowestBranch;
    console.log("toIterateQueue", toIterateQueue);
    if (!this.root.parent) return 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.shift();
      if (Array.isArray(current) && !current.length) return lowestBranch + 1;
      console.log("CURRENT", current);
      console.log("CURRENT BRANCH", current.branch);
      console.log("lowestBranch", lowestBranch);
      lowestBranch = current.branch
      toIterateQueue.push(current.children);
    }
    return lowestBranch + 1;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // minDepth() {
  //   let treeLgth = 0;
  //   const toIterateQueue = [this.root];
  //   if (!toIterateQueue[0].parent) return 0;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.shift();
  //     if (!current.parent || !current.parent) return treeLgth;
  //     treeLgth++;
  //     toIterateQueue.push(current.leftChildren, current.rightChildren);
  //   }
  //   return treeLgth;
  // }

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
    let treeLgth = 0;
    const toIterateQueue = [this.root];
    const iteratedNodes = {};
    // console.log("toIterateQueue", toIterateQueue);
    if (!toIterateQueue[0].parent) return 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.shift();
      iteratedNodes[current.parent] = current.parent;
      console.log("toIterateQueue", toIterateQueue);
      console.log("current", current);
      // console.log("current left", current.left);
      // console.log("current right", current.right);
      // toIterateQueue.push(current.leftChildren, current.rightChildren || "");
      if (current.leftChildren || current.rightChildren) treeLgth++;
      // if (!current.parent || !current.parent) return treeLgth;
      if (current.leftChildren || current.rightChildren) {
        toIterateQueue.push(current.leftChildren, current.rightChildren);
        // treeLgth++;
      }
    }
    return treeLgth;
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
/* SAMPLE TREES */
// const newTreeSmall = new BinaryTreeNodes(1, 2, 3, 1);
// const treeSm = new BinaryTree(newTreeSmall);
// const newTreeMed = new BinaryTreeNodes(1, 2, 3, 1, new BinaryTreeNodes(2, 3, 4, 2, new BinaryTreeNodes(3, 4, 5, 2)));
// const treeMed = new BinaryTree(newTreeMed);
// const newTreeLrg = new BinaryTreeNodes(1, 2, 3, 1, new BinaryTreeNodes(2, 4, 5, 2, new BinaryTreeNodes(3, 6, 7, 2, new BinaryTreeNodes(4, 8, 9, 3, new BinaryTreeNodes(5, 10, 11, 3, new BinaryTreeNodes(6, 12, 13, 3))))));
// const treeLrg = new BinaryTree(newTreeLrg);

// The binary structure is wrong and inefficient.
// This logic shows how the val prop breaks the left and right traits.
// const binaryNodes = new BinaryTreeNode("binary", new BinaryTreeNode("binary", new BinaryTreeNode(1, 2, 3), new BinaryTreeNode(1, 2, 3)), 3);


module.exports = { BinaryTree, BinaryTreeNodes };
