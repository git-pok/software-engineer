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
  minDepth() {
    const queue = [this.root];
    let depth = 1;
    // console.log("queue", queue);
    while (queue.length) {
      // const currentQueue = JSON.parse(JSON.stringify(queue.slice(0)));
      const currentQueue = JSON.parse(JSON.stringify(queue));
      queue.length = 0;
      // console.log("WHILE queue.length, queue.length,", queue);
      // console.log("WHILE queue.length currentQueue", currentQueue);
      while (currentQueue.length) {
        // console.log("WHILE CURRENT");
        const queueCurrent = JSON.parse(JSON.stringify(currentQueue.shift()));
        if (queueCurrent.left === null && queueCurrent.right === null) {
          currentQueue.length = 0;
          return depth;
        }
        else if (queueCurrent.left === null) queue.push(queueCurrent.right);
        else if (queueCurrent.right === null) queue.push(queueCurrent.left);
        else if (queueCurrent.left !== null && queueCurrent.right !== null) {
          queue.push(queueCurrent.left);
          queue.push(queueCurrent.right);
        }
      }
      depth++;
    }
  }

  maxDepth() {
    const queue = [this.root];
    let depth = 1;
    const depths = [];
    while (queue.length) {
      const current = JSON.parse(JSON.stringify(queue));
      queue.length = 0;
      // console.log("queue", queue);
      while (current.length) {
        const currentQueue = JSON.parse(JSON.stringify(current.shift()));
        // console.log("currentQueue", currentQueue);
        if (currentQueue.left === null && currentQueue.right === null) {
          depths.push(depth);
        }
        else if (currentQueue.left === null) queue.push(currentQueue.right);
        else if (currentQueue.right === null) queue.push(currentQueue.left);
        else if (currentQueue.left !== null && currentQueue.right !== null) {
          queue.push(currentQueue.left);
          queue.push(currentQueue.right);
        }
      }
      depth++;
    }
    return Math.max(...depths);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const queue = [this.root];
    let nodeMaxSum = -Infinity;
    while (queue.length) {
      const current = queue.shift();
      let sum = 0;
      // console.log("queue", queue);
      // console.log("current", current);
      const nodeVal = current.val ? current.val : 0;
      const nodeLeft = current.left ? current.left.val : 0;
      const nodeRight = current.right ? current.right.val : 0;
      sum = nodeVal + nodeLeft + nodeRight;
      // console.log("sum", sum);
      nodeMaxSum = sum > nodeMaxSum ? sum : nodeMaxSum;
      if (current.left === null && current.right === null) sum = 0;
      else if (current.left === null) queue.push(current.right);
      else if (current.right === null) queue.push(current.left);
      else if (current.left !== null && current.right !== null) {
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    return nodeMaxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root.val) return null;
    const queue = [this.root];
    let nextLargerNum = Infinity;
    while (queue.length) {
      const current = queue.pop();
      const val = current.val;
      if (val > lowerBound && val < nextLargerNum) nextLargerNum = val;
      if (current.left !== null && current.right !== null) {
        queue.push(current.left);
        queue.push(current.right);
      }
      else if (current.left !== null) queue.push(current.left);
      else if (current.right !== null) queue.push(current.right);
    }
    return nextLargerNum === Infinity ? null : nextLargerNum;
  }

  // minDepth(root) {
    // minDepth recursive solution is from Geeks for Geeks:
    // https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/
  //   if (root.val === undefined) return 0;
  //   if (root.left === null && root.right === null) return 1;
  //   if (root.left === null) return this.minDepth(root.right) + 1;
  //   if (root.right === null) return this.minDepth(root.left) + 1;
  //   return Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1;  
  // }

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
let smallTree;
let largeTree;
let largeTreeII;
let largeTreeIII;
let emptyTree;
const emptyTreeNode = new BinaryTreeNode(1);
  emptyTree = new BinaryTree(emptyTreeNode);

  const smallTree1 = new BinaryTreeNode(1);
  const smallTree2 = new BinaryTreeNode(2);
  const smallTree3 = new BinaryTreeNode(3);
  const smallTree4 = new BinaryTreeNode(4);
  const smallTree5 = new BinaryTreeNode(5);
  const smallTree6 = new BinaryTreeNode(6);
  const smallTree7 = new BinaryTreeNode(7);
  smallTree1.left = smallTree2;
  smallTree1.right = smallTree3;
  smallTree2.left = smallTree4;
  smallTree = new BinaryTree(smallTree1);

  const largeTree1 = new BinaryTreeNode(1);
  const largeTree2 = new BinaryTreeNode(2);
  const largeTree3 = new BinaryTreeNode(3);
  const largeTree4 = new BinaryTreeNode(4);
  const largeTree5 = new BinaryTreeNode(5);
  const largeTree6 = new BinaryTreeNode(6);
  const largeTree7 = new BinaryTreeNode(7);
  const largeTree8 = new BinaryTreeNode(8);
  const largeTree9 = new BinaryTreeNode(9);
  const largeTree10 = new BinaryTreeNode(10);
  const largeTree11 = new BinaryTreeNode(11);
  largeTree1.left = largeTree2;
  largeTree1.right = largeTree3;
  largeTree3.left = largeTree4;
  largeTree3.right = largeTree5;
  largeTree2.left = largeTree6;
  largeTree2.right = largeTree7;
  largeTree6.left = largeTree8;
  largeTree6.right = largeTree9;
  largeTree7.left = largeTree10;
  largeTree7.right = largeTree11;
  largeTree = new BinaryTree(largeTree1);

  const largeTreeII1 = new BinaryTreeNode(1);
  const largeTreeII2 = new BinaryTreeNode(2);
  const largeTreeII3 = new BinaryTreeNode(3);
  const largeTreeII4 = new BinaryTreeNode(4);
  const largeTreeII5 = new BinaryTreeNode(5);
  const largeTreeII6 = new BinaryTreeNode(6);
  const largeTreeII7 = new BinaryTreeNode(7);
  const largeTreeII8 = new BinaryTreeNode(8);
  const largeTreeII9 = new BinaryTreeNode(9);
  const largeTreeII10 = new BinaryTreeNode(10);
  const largeTreeII11 = new BinaryTreeNode(11);
  largeTreeII1.left = largeTreeII2;
  largeTreeII1.right = largeTreeII3;
  largeTreeII2.left = largeTreeII6;
  largeTreeII2.right = largeTreeII7;
  largeTreeII6.left = largeTreeII8;
  largeTreeII6.right = largeTreeII9;
  largeTreeII7.left = largeTreeII10;
  largeTreeII7.right = largeTreeII11;
  largeTreeII = new BinaryTree(largeTreeII1);

  const largeTreeIII1 = new BinaryTreeNode(1);
  const largeTreeIII2 = new BinaryTreeNode(2);
  const largeTreeIII3 = new BinaryTreeNode(3);
  const largeTreeIII4 = new BinaryTreeNode(4);
  const largeTreeIII5 = new BinaryTreeNode(5);
  const largeTreeIII6 = new BinaryTreeNode(6);
  const largeTreeIII7 = new BinaryTreeNode(7);
  const largeTreeIII8 = new BinaryTreeNode(8);
  const largeTreeIII9 = new BinaryTreeNode(9);
  const largeTreeIII10 = new BinaryTreeNode(10);
  const largeTreeIII11 = new BinaryTreeNode(11);
  const largeTreeIII12 = new BinaryTreeNode(12);
  const largeTreeIII13 = new BinaryTreeNode(13);
  const largeTreeIII14 = new BinaryTreeNode(14);
  const largeTreeIII15 = new BinaryTreeNode(15);
  const largeTreeIII16 = new BinaryTreeNode(16);
  const largeTreeIII17 = new BinaryTreeNode(17);
  largeTreeIII1.left = largeTreeIII2;
  largeTreeIII1.right = largeTreeIII3;
  largeTreeIII2.left = largeTreeIII4;
  largeTreeIII2.right = largeTreeIII5;
  largeTreeIII3.left = largeTreeIII6;
  largeTreeIII3.right = largeTreeIII7;
  largeTreeIII4.left = largeTreeIII8;
  largeTreeIII4.right = largeTreeIII9;
  largeTreeIII5.left = largeTreeIII10;
  largeTreeIII5.right = largeTreeIII11;
  largeTreeIII6.left = largeTreeIII12;
  largeTreeIII6.right = largeTreeIII13;
  largeTreeIII7.left = largeTreeIII14;
  largeTreeIII7.right = largeTreeIII15;
  largeTreeIII10.left = largeTreeIII16;
  largeTreeIII10.right = largeTreeIII17;
  largeTreeIII = new BinaryTree(largeTreeIII1);

module.exports = { BinaryTree, BinaryTreeNode };
