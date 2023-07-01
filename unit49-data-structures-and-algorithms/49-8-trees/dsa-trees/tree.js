/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    const toIterateStack = [this.root];
    while (toIterateStack.length) {
      const current = toIterateStack.pop();
      if (typeof current.val === "number") total += current.val;
      for (let node of current.children) {
        toIterateStack.push(node);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let total = 0;
    const toIterateStack = [this.root];
    while (toIterateStack.length) {
      const current = toIterateStack.pop();
      if (typeof current.val === "number" && current.val % 2 === 0) total++;
      for (let node of current.children) {
        toIterateStack.push(node);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let total = 0;
    const toIterateStack = [this.root];
    while (toIterateStack.length) {
      const current = toIterateStack.pop();
      if (typeof current.val === "number" && current.val > lowerBound) total ++;
      for (let node of current.children) {
        toIterateStack.push(node);
      }
    }
    return total;
  }
}

// const htmlEl = new TreeNode("html", [
//   new TreeNode("odds", [new TreeNode(1)]),
//   new TreeNode("evens", [new TreeNode(2, [new TreeNode(4), new TreeNode(6)])])
// ]);

// const naryTree = new Tree(htmlEl);


module.exports = { Tree, TreeNode };
