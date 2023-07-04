/** OG BinaryTreeNode: node for a general tree. */
// class BinaryTreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
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
      // console.log("CURRENT", current);
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
      // console.log("CURRENT", current);
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
      // console.log("CURRENT", current);
      if (!current.children.length) return lowestBranch = current.branch + 1;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
      lowestBranch = current.branch;
    }
    return lowestBranch;
  }

  // minDepth() {
  //   if (!this.root.val) return 0;
  //   const toIterateQueue = [this.root];
  //   let lowestBranch = 0;
  //   while (toIterateQueue.length) {
  //     const current = toIterateQueue.shift();
  //     console.log("CURRENT", current);
  //     if (!current.left || !current.right) return lowestBranch;
  //     toIterateQueue.push(current.left, current.right);
  //     if (current.left && current.right) lowestBranch++;
  //   }
  //   return lowestBranch;
  // }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if (!this.root.val) return 0;
    const toIterateQueue = [this.root];
    let maxBranchDep = 0;
    while (toIterateQueue.length) {
      const current = toIterateQueue.pop();
      // console.log("CURRENT", current);
      maxBranchDep = current.branch + 1 >= maxBranchDep ? current.branch + 1 : maxBranchDep;
      for (let child of current.children) {
        toIterateQueue.push(child);
      }
    }
    return maxBranchDep;
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
// const E = new Node(1);
// const A = new Node(2);
// const B = new Node(3);
// const C = new Node(4);
// const D = new Node(5);
// const F = new Node(6);
// const G = new Node(7);
// E.left = A;
// E.right = B;
// B.left = C;
// B.right = D;
// A.left = F;
// const tree = new BinaryTree(E);

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);
// const seven = new Node(7);
// const eight = new Node(8);
// const nine = new Node(9);
// const ten = new Node(10);
// const elvn = new Node(11);
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

module.exports = { BinaryTree, BinaryTreeNode };
