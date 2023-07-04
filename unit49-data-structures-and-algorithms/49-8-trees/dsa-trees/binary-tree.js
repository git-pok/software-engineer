/** OG BinaryTreeNode: node for a general tree. */
// class BinaryTreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }
// class Node {
// constructor(val, branch, left, right, children = []) {
// this.val = val;
// this.branch = branch;
// this.left = left;
// this.right = right;
// this.children = children;
// }
// }
// let htmlEl = new Node(1, 1, 2, 3, [
// new Node(2, 2, 3, 4, [new Node(3, 3, 5, 6)]),
// new Node(3, 2, 4, 5, [new Node(4, 3, 6, 7)])
// ]);
// class BinaryTreeNode {
//   constructor(val, left, right, branch, children=[]) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//     this.branch = branch;
//     this.children = children;
//   }
// }

class BinaryTreeNode {
  constructor(branch, val, left, right, children=[]) {
    this.branch = branch;
    this.val = val;
    this.left = left;
    this.right = right;
    this.children = children;   
  }
}
// const tree = new BinaryTreeNode(1, 1, new BinaryTreeNode(2, 2, 3, 4), new BinaryTreeNode(2, 3, 4, 5));
class BinaryTree {
  constructor(root = null) {
    // this.rootNode = rootNode;
    // this.children = root;
    this.root = root;
  }

  findDFS(val, branch) {
    const toVisitStack = [this.root];
    while(toVisitStack.length) {
      const current = toVisitStack.pop();
      console.log("CURRENT", current);
      if (current.val === val && current.branch === branch) {
        return current;
      }

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }

  findBFS(val, branch) {
    const toVisitQueue = [this.root];
    while(toVisitQueue.length) {
      const current = toVisitQueue.shift();
      console.log("CURRENT", current);
      if (current.val === val && current.branch === branch) {
        return current;
      }

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
  }

  /** minDepth()
   * return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root.val) return 0;
    const toIterateQueue = [this.root];
    let lowestBranch;
    while (toIterateQueue.length) {
      const current = toIterateQueue.shift();
      console.log("CURRENT", current);
      if (Array.isArray(current) && !current.children.length) return lowestBranch;
      else if (!current.children.length) return lowestBranch = current.branch + 1;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
      lowestBranch = current.branch;
      // toIterateQueue.push(current.children);
    }
    return lowestBranch;
  }
  // minDepth() {
  //   if (!this.root.val) return 0;
  //   const toIterateQueue = [this.root];
  //   let lowestBranch;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.shift();
  //     console.log("CURRENT", current);
  //     if (Array.isArray(current) && !current.length) return lowestBranch;
  //     else if (!current.left || !current.right) return lowestBranch = current.branch;
  //     lowestBranch = current.branch;
  //     toIterateQueue.push(current.children);
  //   }
  //   return lowestBranch;
  // }

  /** OLD minDepth() SOLUTION
   * minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if (!this.root.val) return 0;
    const toIterateQueue = [this.root];
    let maxBranchDep = 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.pop();
      console.log("CURRENT", current);
      if (Array.isArray(current) && !current.children.length) return maxBranchDep;
      maxBranchDep = current.branch + 1 >= maxBranchDep ? current.branch + 1 : maxBranchDep;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
      // maxBranchDep = current.branch;
      // toIterateQueue.push(current.children);
    }
    return maxBranchDep;
  }
  // maxDepth() {
  //   if (!this.root.val) return 0;
  //   const toIterateQueue = [this.root];
  //   let maxBranchDep = 0;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.pop();
  //     console.log("CURRENT", current);
  //     if (Array.isArray(current) && !current.length) return maxBranchDep;
  //     if (current.branch >= maxBranchDep) maxBranchDep = current.branch;
  //     toIterateQueue.push(current.children);
  //   }
  //   return lowestBranch;
  // }

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
// const newTree = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4), new BinaryTreeNode(2, 3, 5, 6)]);
// const tree = new BinaryTree(newTree);
// const newTreeLrg = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4, [new BinaryTreeNode(3, 3, 7, 8)]), new BinaryTreeNode(2, 3, 5, 6)]);
// const treeLrg = new BinaryTree(newTreeLrg);
// const newTreeLrgII = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4), new BinaryTreeNode(2, 3, 5, 6, [new BinaryTreeNode(3, 6, 7, 8)])]);
// const treeLrgII = new BinaryTree(newTreeLrgII);
// const newTreeEmpty = new BinaryTreeNode();
// const treeEmpty = new BinaryTree(newTreeEmpty);

/* SAMPLE TREES */
// const newTreeSmall = new BinaryTreeNode(1, 2, 3, 2, new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, null, null, 2)));
// const treeSm = new BinaryTree(newTreeSmall);
// const newTreeMed = new BinaryTreeNode(1, 2, 3, 2, new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, 4, 5, 3)));
// const treeMed = new BinaryTree(newTreeMed);
// const newTreeLrg = new BinaryTreeNode(1, 2, 3, 2, new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, 5, 6, 3, new BinaryTreeNode(3, 7, 8, 4, new BinaryTreeNode(4, 9, 10, 4, new BinaryTreeNode(5, null, null, 3, new BinaryTreeNode(6, 11, 12, 4)))))));
// const treeLrg = new BinaryTree(newTreeLrg);
// const emptyTree = new BinaryTreeNode();
// const treeEmpty = new BinaryTree(emptyTree);


// const newTreeSmallNode = new BinaryTreeNode(1, 2, 3, 2);
// const newTreeSmall = new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, null, null, 2));
// const treeSm = new BinaryTree(newTreeSmallNode, newTreeSmall);
// const newTreeMedNode = new BinaryTreeNode(1, 2, 3, 2);
// const newTreeMed = new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, 4, 5, 3));
// const treeMed = new BinaryTree(newTreeMedNode, newTreeMed);
// const newTreeLrgNode = new BinaryTreeNode(1, 2, 3, 2);
// const newTreeLrg = new BinaryTreeNode(2, 3, 4, 3, new BinaryTreeNode(3, 5, 6, 3, new BinaryTreeNode(3, 7, 8, 4, new BinaryTreeNode(4, 9, 10, 4, new BinaryTreeNode(5, null, null, 3, new BinaryTreeNode(6, 11, 12, 4))))));
// const treeLrg = new BinaryTree(newTreeLrgNode, newTreeLrg);

/** OLD SOLUTION SAMPLE TREES
// const newTree = new BinaryTreeNodes(1, 2, 3, 1,  new BinaryTreeNodes(2, 3, 4, 2, [3, 4], [5, 6]), new BinaryTreeNodes(3, 2, 3, 2, [5, 6], [7, 8]));
// const tree = new BinaryTree(newTree);
// const newTreeII = new BinaryTreeNodes(1, 2, 3,  new BinaryTreeNodes(2, 3, 4, [3, 4], [5, 6]), [6, 7]);
*/

// The binary structure is wrong and inefficient.
// This logic shows how the val prop breaks the left and right traits.
// const binaryNodes = new BinaryTreeNode("binary", new BinaryTreeNode("binary", new BinaryTreeNode(1, 2, 3), new BinaryTreeNode(1, 2, 3)), 3);


module.exports = { BinaryTree, BinaryTreeNodes };
