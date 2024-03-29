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
        if (!this.root) return this.root = new Node(val);
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
  insertRecursively(val, queue = [this.root]) {
    try {
      if (val === undefined) throw new Error("ERROR! Parameter is missing.");
      if (!this.root) return this.root = new Node(val);
      const currNode = queue.shift();
      if (this.root.val === undefined) this.root.val = val;
      else if (val <= currNode.val && currNode.left === null) currNode.left = new Node(val);
      else if (val >= currNode.val && currNode.right === null) currNode.right = new Node(val);
      else if (val <= currNode.val && currNode.left !== null) this.insertRecursively(val, [currNode.left]);
      else if (val >= currNode.val && currNode.right !== null) this.insertRecursively(val, [currNode.right]);
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
      else if (val > currNode.val) return this.findRecursively(val, currNode.right)
      else return this.findRecursively(val, currNode.left);
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes.
   * root, left, right
   * */
  dfsPreOrder(node = this.root) {
    try {
      const stack = [node];
      const trvsNodes = [];
      while (stack.length) {
        const currNode = stack.pop();
        if (currNode === null) null;
        // push nodes
        // else trvsNodes.push(currNode);
        // push values
        else trvsNodes.push(currNode.val);
        if (currNode.right) stack.push(currNode.right);
        if (currNode.left) stack.push(currNode.left);
      }
      return trvsNodes;
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder(node = this.root, arr = []) {
    try {
      // debugger;
      if (node.left) this.dfsInOrder(node.left, arr);
      // push nodes
      // arr.push(node);
      // push values
      arr.push(node.val);
      if (node.right) this.dfsInOrder(node.right, arr);
      return arr;
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes.
   * left, right, root
   * */

  dfsPostOrder(root = this.root) {
    try {
      const stack = [root];
      const trvsNodes = [];
      while (stack.length) {
        const currNode = stack.pop();
        if (currNode === null) null;
        else {
          // push nodes
          // trvsNodes.unshift(currNode);
          // push values
          trvsNodes.unshift(currNode.val);
          stack.push(currNode.left);
          stack.push(currNode.right);
        }
      }
      return trvsNodes;
    } catch (err) {
      console.error(`ERROR!\n${err}`);
    }
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs(queue = [this.root], arr = []) {
    try {
      const currNode = queue.shift();
      if (currNode === undefined) return arr;
      // push nodes
      // arr.push(currNode);
      // push values
      arr.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      this.bfs(queue, arr);
      return arr;
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
