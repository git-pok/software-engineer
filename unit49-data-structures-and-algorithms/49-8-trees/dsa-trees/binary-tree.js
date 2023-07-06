/** OG BinaryTreeNode: node for a general tree. */
/* THIS FILE IS NOT COMPLETE YET. I AM MAKING CHNAGES. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth()
   * return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // minDepth() {
  //   if (!this.root.val) return 0;
  //   const toIterateQueue = [this.root];
  //   let lowestBranch;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.shift();
  //     // console.log("CURRENT", current);
  //     if (!current.children.length) return lowestBranch = current.branch + 1;
  //     for (let child of current.children) {
  //       toIterateQueue.push(child);
  //     }
  //     lowestBranch = current.branch;
  //   }
  //   return lowestBranch;
  // }
  /* RIGHT BINARY TREE NODE CLASS minDepth */
  // minDepth() {
  //   if (!this.root) return 0;
  //   const toIterateQueue = [this.root];
  //   let branch = 1;
  //   const branchDepths = [];
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.pop();
  //     console.log("toIterateQueue", toIterateQueue);
  //     console.log("toIterateQueueLen", toIterateQueue.length);
  //     console.log("CURRENT", current);
  //     console.log("branch", branch);
  //     if ((!current.left || !current.right) && !toIterateQueue.length) {
  //       branchDepths.push(branch);
  //     } else if (!current.left || !current.right) {
  //       console.log("POPPED");
  //       // console.log("toIterateQueue", toIterateQueue);
  //       if (toIterateQueue.length !== 1) toIterateQueue.pop();
  //       console.log("toIterateQueue", toIterateQueue);
  //       branchDepths.push(branch);
  //       branch--;
  //       console.log("branchDepths", branchDepths);
  //     } else {
  //       branch++;
  //     }
  //     if (current.left) toIterateQueue.push(current.left);
  //     if (current.right) toIterateQueue.push(current.right);
  //   }
  //   return Math.min(...branchDepths);
  // }
  // ALMOST RIGHT
  // minDepth(root) {
  //   if (!this.root) return 0;
  //   const toIterateQueue = [this.root];
  //   let branch = 1;
  //   const branchDepths = [];
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.pop();
  //     console.log("toIterateQueue", toIterateQueue);
  //     console.log("toIterateQueueLen", toIterateQueue.length);
  //     console.log("CURRENT", current);
  //     console.log("branch", branch);
  //     if (current.left && current.right) {
  //       toIterateQueue.push(current.left);
  //       toIterateQueue.push(current.right);
  //       branch++;
  //     }
  //     else if (current.left) {
  //       toIterateQueue.push(current.left);
  //       branch++;
  //     }
  //     else if (current.right) {
  //       toIterateQueue.push(current.right);
  //       branch++;
  //     }
  //   }
  //   return Math.min(...branchDepths);
  // }
  minDepth(root) {
    // minDepth solution is from Geeks for Geeks:
    // https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/
    debugger;
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    if (root.left === null) return this.minDepth(root.right) + 1;
    if (root.right === null) return this.minDepth(root.left) + 1;
    return Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // maxDepth() {
  //   if (!this.root.val) return 0;
  //   const toIterateQueue = [this.root];
  //   let maxBranchDep = 0;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.pop();
  //     // console.log("CURRENT", current);
  //     maxBranchDep = current.branch + 1 >= maxBranchDep ? current.branch + 1 : maxBranchDep;
  //     for (let child of current.children) {
  //       toIterateQueue.push(child);
  //     }
  //   }
  //   return maxBranchDep;
  // }
  maxDepth(root) {
    // minDepth solution is from Geeks for Geeks:
    // https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/
    debugger;
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    if (root.left === null) return this.maxDepth(root.right) + 1;
    if (root.right === null) return this.maxDepth(root.left) + 1;
    return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root.val) return 0;
    const toIterateQueue = [this.root];
    let maxSum = 0;
    let nodeSum = 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.pop();
      // console.log("CURRENT", current);
      nodeSum = current.val + current.left + current.right;
      maxSum = nodeSum >= maxSum ? nodeSum : maxSum;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
    }
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root.val) return null;
    const toIterateQueue = [this.root];
    let nextLargerNum = Infinity;
    while (toIterateQueue.length) {
      const current = toIterateQueue.pop();
      const val = current.val;
      const left = current.left;
      const right = current.right;
      if (val > lowerBound && val < nextLargerNum) nextLargerNum = val;
      else if (left > lowerBound && left < nextLargerNum) nextLargerNum = left;
      else if (right > lowerBound && right < nextLargerNum) nextLargerNum = right;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
    }
    return nextLargerNum === Infinity ? null : nextLargerNum;
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
// const newTree = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4), new BinaryTreeNode(2, 3, 5, 6)]);
// const tree = new BinaryTree(newTree);
// const newTreeLrg = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4, [new BinaryTreeNode(3, 3, 7, 8)]), new BinaryTreeNode(2, 3, 5, 6)]);
// const treeLrg = new BinaryTree(newTreeLrg);
// const newTreeLrgII = new BinaryTreeNode(1, 1, 2, 3, [new BinaryTreeNode(2, 2, 3, 4), new BinaryTreeNode(2, 3, 5, 6, [new BinaryTreeNode(3, 6, 7, 8)])]);
// const treeLrgII = new BinaryTree(newTreeLrgII);
// const newTreeEmpty = new BinaryTreeNode();
// const treeEmpty = new BinaryTree(newTreeEmpty);
// const newTreeNeg = new BinaryTreeNode(1, -1, 2, -3, [new BinaryTreeNode(2, 2, 3, -4, [new BinaryTreeNode(3, 3, 7, -8)]), new BinaryTreeNode(2, 3, -5, 6)]);
// const treeNeg = new BinaryTree(newTreeNeg);

/* SAMPLE TREES */
// const E = new BinaryTreeNode(1);
// const A = new BinaryTreeNode(2);
// const B = new BinaryTreeNode(3);
// const C = new BinaryTreeNode(4);
// const D = new BinaryTreeNode(5);
// const F = new BinaryTreeNode(6);
// const G = new BinaryTreeNode(7);
// E.left = A;
// E.right = B;
// B.left = C;
// B.right = D;
// A.left = F;
// const tree = new BinaryTree(E);

// const one = new BinaryTreeNode(1);
// const two = new BinaryTreeNode(2);
// const three = new BinaryTreeNode(3);
// const four = new BinaryTreeNode(4);
// const five = new BinaryTreeNode(5);
// const six = new BinaryTreeNode(6);
// const seven = new BinaryTreeNode(7);
// const eight = new BinaryTreeNode(8);
// const nine = new BinaryTreeNode(9);
// const ten = new BinaryTreeNode(10);
// const elvn = new BinaryTreeNode(11);
// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;
// two.left = six;
// two.right = seven;
// six.left = eight;
// six.right = nine;
// seven.left = ten;
// seven.right = elvn;
// const treeMed = new BinaryTree(one);

// const one = new BinaryTreeNode(1);
// const two = new BinaryTreeNode(2);
// const three = new BinaryTreeNode(3);
// const four = new BinaryTreeNode(4);
// const five = new BinaryTreeNode(5);
// const six = new BinaryTreeNode(6);
// const seven = new BinaryTreeNode(7);
// const eight = new BinaryTreeNode(8);
// const nine = new BinaryTreeNode(9);
// const ten = new BinaryTreeNode(10);
// const elvn = new BinaryTreeNode(11);
// one.left = two;
// one.right = three;
// two.left = six;
// two.right = seven;
// six.left = eight;
// six.right = nine;
// seven.left = ten;
// seven.right = elvn;
// const treeMedII = new BinaryTree(one);

module.exports = { BinaryTree, BinaryTreeNode };
