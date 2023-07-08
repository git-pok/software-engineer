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
    try {
      if (val === undefined) throw new Error("ERROR! Parameter is missing.");
      const queue = [this.root];
      while (queue.length) {
        const currNode = queue.shift();
        // console.log("CURR NODE", currNode);
        if (this.root.val === undefined) this.root.val = val;
        else if (val <= currNode.val && currNode.left === null) currNode.left = new Node(val);
        else if (val >= currNode.val && currNode.right === null) currNode.right = new Node(val);
        else if (val <= currNode.val && currNode.left !== null) queue.push(currNode.left);
        else if (val >= currNode.val && currNode.right !== null) queue.push(currNode.right);
      }
      return this.root;
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, root) {
    try {
      if (val === undefined) throw new Error("ERROR! Parameter is missing.");
      const queue = root ? [root] : [this.root];
      const currNode = queue.shift();
      if (this.root.val === undefined) this.root.val = val;
      else if (val <= currNode.val && currNode.left === null) currNode.left = new Node(val);
      else if (val >= currNode.val && currNode.right === null) currNode.right = new Node(val);
      else if (val <= currNode.val && currNode.left !== null) this.insertRecursively(val, currNode.left);
      else if (val >= currNode.val && currNode.right !== null) this.insertRecursively(val, currNode.right);
      return this.root;
    } catch(err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    try {
      if (val === undefined) throw new Error("ERROR! Parameter is missing.");
      const queue = [this.root];
      while (queue.length) {
        const currNode = queue.shift();
        if (currNode === null) return -1;
        else if (currNode.val === val) return currNode;
        else if (val > currNode.val) queue.push(currNode.right);
        else if (val < currNode.val) queue.push(currNode.left);
      }
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, node) {
    try {
      if (val === undefined) throw new Error("ERROR! Parameter is missing.");
      const queue = node ? [node] : [this.root];
      const currNode = queue.shift();
      if (node === null) return -1;
      else if (currNode.val === val) return currNode;
      return val > currNode.val ? this.findRecursively(val, currNode.right) : this.findRecursively(val, currNode.left);
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  // traverse(node = this.root) {
  //   if (node.left) this.traverse(node.left);
  //   console.log(node.val);
  //   if (node.right) this.traverse(node.right);
  // }
  
  dfsPreOrder() {
    try {
      const stack = [this.root];
      const traversedNodes = [];
      while (stack.length) {
        const currNode = stack.pop();
        if (currNode === null) null;
        else {
          traversedNodes.push(currNode);
          stack.push(currNode.right);
          stack.push(currNode.left);
        }
      }
      return traversedNodes;
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(root = this.root) {
    try {
      const stackLft = [root.left];
      const stackRght = [root.right];
      const leftTrvsNodes = [];
      const rightTrvsNodes = [];

      while (stackLft.length) {
        const currNode = stackLft.pop();
        if (currNode === null) null;
        else {
          leftTrvsNodes.unshift(currNode);
          stackLft.push(currNode.left);
          stackLft.push(currNode.right);
        }
      }

      leftTrvsNodes.push(this.root);

      while (stackRght.length) {
        const currNode = stackRght.pop();
        if (currNode === null) null;
        else {
          rightTrvsNodes.unshift(currNode);
          stackRght.push(currNode.right);
          stackRght.push(currNode.left);
        }
      }
      
      return [...leftTrvsNodes, ...rightTrvsNodes];
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    try {
      const queue = [this.root];
      const traversedNodes = [];
      while (queue.length) {
        const currNode = queue.shift();
        if (currNode === null) null;
        else {
          traversedNodes.push(currNode);
          queue.push(currNode.left);
          queue.push(currNode.right);
        }
      }
      return traversedNodes;
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
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

const smallTree = new Node();
const tree = new BinarySearchTree(smallTree);
tree.insertRecursively(20);
tree.insertRecursively(30);
tree.insertRecursively(19);
tree.insertRecursively(15);
tree.insertRecursively(10);
tree.insertRecursively(17);
tree.insertRecursively(20);
tree.insertRecursively(31);
tree.insertRecursively(33);
tree.insertRecursively(37);
tree.insertRecursively(40);
tree.insertRecursively(25);
tree.insertRecursively(29);

module.exports = BinarySearchTree;
