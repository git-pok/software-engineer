class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const queue = [this.root];
    while (queue.length) {
      const currNode = queue.shift();
      console.log("CURR NODE", currNode);
      if (this.root.val === undefined) {
        this.root.val = val;
        return this.root;
      } else if (val <= currNode.val && currNode.left === null) {
        const tree = new Node(val);
        console.log("CURR NODE LEFT", currNode.left);
        currNode.left = tree;
      } else if (val >= currNode.val && currNode.right === null) {
        console.log("CURR NODE RIGHT", currNode.right);
        const tree = new Node(val);
        currNode.right = tree;
      } else if (val <= currNode.val && currNode.left !== null) {
        queue.push(currNode.left);
      } else if (val >= currNode.val && currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
    return this.root;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
