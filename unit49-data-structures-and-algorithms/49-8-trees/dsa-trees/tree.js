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
    // let total = 0;
    // const toIterateStack = [this.root.children];
    // const current = this;
    // const rootVal = this.root.val;
    // const children = this.root.children;
    // console.log(toIterateStack);
    // if (typeof rootVal === "number") toSumStack.push(rootVal);
    // while (toIterateStack.length) {
    //   if (toIterateStack[0].val) total += children.val;
    //   else
    // }
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

const htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li"), new Node(“li2”)])])
  ]);

const naryTree = new Tree(htmlEl);
naryTree.sumValues();


module.exports = { Tree, TreeNode };
