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

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

const htmlEl = new TreeNode("html", [
  new TreeNode("head", [new TreeNode("title")]),
  new TreeNode("body", [new TreeNode("ul", [new TreeNode("li"), new TreeNode("li2")])])
  ]);

const naryTree = new Tree(htmlEl);
naryTree.sumValues();


module.exports = { Tree, TreeNode };
