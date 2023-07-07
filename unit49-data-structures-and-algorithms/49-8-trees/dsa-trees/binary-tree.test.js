const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

let emptyTree;
let smallTree;
let smallTreeNeg;
let largeTree;
let largeTreeII;
let largeTreeIII;


beforeEach(function() {
  // build trees;
  const emptyTreeNode = new BinaryTreeNode();
    emptyTree = new BinaryTree(emptyTreeNode);

  const smallTreeNeg1 = new BinaryTreeNode(1);
  const smallTreeNeg2 = new BinaryTreeNode(2);
  const smallTreeNeg3 = new BinaryTreeNode(3);
  const smallTreeNeg4 = new BinaryTreeNode(-4);
  const smallTreeNeg5 = new BinaryTreeNode(-5);
  const smallTreeNeg6 = new BinaryTreeNode(6);
  const smallTreeNeg7 = new BinaryTreeNode(-7);
    smallTreeNeg1.left = smallTreeNeg2;
    smallTreeNeg1.right = smallTreeNeg3;
    smallTreeNeg2.left = smallTreeNeg4;
    smallTreeNeg2.right = smallTreeNeg5;
    smallTreeNeg3.left = smallTreeNeg6;
    smallTreeNeg3.right = smallTreeNeg7;
    smallTreeNeg = new BinaryTree(smallTreeNeg1);

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
});

describe("minDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.minDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.minDepth()).toBe(3);
  });

  it("handles more complex trees", function() {
    expect(largeTreeII.minDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTreeIII.minDepth()).toBe(4);
  });

  it("handles empty trees", function() {
    expect(emptyTree.minDepth()).toBe(0);
  });
});

describe("maxDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.maxDepth()).toBe(3);
  });

  it("handles more complex trees", function() {
    expect(largeTree.maxDepth()).toBe(4);
  });

  it("handles more complex trees", function() {
    expect(largeTreeII.maxDepth()).toBe(4);
  });

  it("handles more complex trees", function() {
    expect(largeTreeIII.maxDepth()).toBe(5);
  });

  it("handles empty trees", function() {
    expect(emptyTree.maxDepth()).toBe(0);
  });
});

describe("maxSum", function() {
  it("handles simple trees", function() {
    expect(smallTree.maxSum()).toBe(6);
  });

  it("handles more complex trees", function() {
    expect(largeTree.maxSum()).toBe(28);
  });

  it("handles more complex trees", function() {
    expect(largeTreeII.maxSum()).toBe(28);
  });

  it("handles more complex trees", function() {
    expect(largeTreeIII.maxSum()).toBe(43);
  });

  it("handles negative values", function() {
    expect(smallTreeNeg.maxSum()).toBe(6);
  });

  it("handles empty trees", function() {
    expect(emptyTree.maxSum()).toBe(0);
  });
});

describe("nextLarger", function() {
  it("handles simple trees", function() {
    expect(smallTree.nextLarger(4)).toBe(null);
    expect(smallTree.nextLarger(1)).toBe(2);
    expect(smallTree.nextLarger(2)).toBe(3);
  });

  it("handles empty trees", function() {
    expect(emptyTree.nextLarger(0)).toBe(null);
  });

  it("handles more complex trees", function() {
    expect(largeTree.nextLarger(1)).toBe(2);
    expect(largeTree.nextLarger(2)).toBe(3);
    expect(largeTree.nextLarger(6)).toBe(7);
    expect(largeTree.nextLarger(8)).toBe(9);
  });

  it("handles more complex trees", function() {
    expect(largeTreeII.nextLarger(1)).toBe(2);
    expect(largeTreeII.nextLarger(2)).toBe(3);
    expect(largeTreeII.nextLarger(3)).toBe(6);
    expect(largeTreeII.nextLarger(11)).toBe(null);
  });
});

/**
 * ##############################
 * TESTS FOR FURTHER STUDY LOGICS
 * ##############################
*/
// describe("areCousins", function() {
//   it("returns true if they are cousins, false if not", function() {
//     let n7 = new BinaryTreeNode(7);
//     let n6 = new BinaryTreeNode(6);
//     let n5 = new BinaryTreeNode(5);
//     let n4 = new BinaryTreeNode(4);
//     let n3 = new BinaryTreeNode(3, n6, n7);
//     let n2 = new BinaryTreeNode(2, n4, n5);
//     let root = new BinaryTreeNode(1, n2, n3);
//     let tree = new BinaryTree(root);

//     expect(tree.areCousins(n4, n6)).toBe(true);
//     expect(tree.areCousins(n4, n7)).toBe(true);
//     expect(tree.areCousins(n5, n6)).toBe(true);
//     expect(tree.areCousins(n5, n7)).toBe(true);
//     expect(tree.areCousins(n2, n3)).toBe(false);
//     expect(tree.areCousins(n4, n5)).toBe(false);
//     expect(tree.areCousins(n6, n7)).toBe(false);
//     expect(tree.areCousins(n4, n3)).toBe(false);
//     expect(tree.areCousins(root, n3)).toBe(false);
//   });
// });

// describe("serialize and deserialize", function() {
//   let myTree;

//   beforeEach(function() {
//     let root = new BinaryTreeNode(1);
//     root.left = new BinaryTreeNode(2);
//     root.right = new BinaryTreeNode(3);
//     root.right.left = new BinaryTreeNode(4);
//     root.right.right = new BinaryTreeNode(5);

//     myTree = new BinaryTree(root);
//   });

//   it("serializes trees into strings", function() {
//     // Failure message:
//     // The 'serialize' function needs to output a string.

//     expect(typeof BinaryTree.serialize(myTree)).toBe("string");
//   });

//   it("deserializes strings into BinaryTree objects", function() {
//     // Failure message:
//     // The 'deserialize' function needs to output a BinaryTreeNode

//     let serialized = BinaryTree.serialize(myTree);
//     let result = BinaryTree.deserialize(serialized);
//     expect(result instanceof BinaryTree).toBe(true);
//   });

//   it("reverses one another", function() {
//     // Failure message:
//     // the function 'deserialize' should perfectly reverse the function 'serialize'

//     let serialized = BinaryTree.serialize(myTree);
//     let result = BinaryTree.deserialize(serialized);
//     expect(result).toEqual(myTree);
//   });

//   it("is a pure function", function() {
//     // Failure message:
//     // original tree must be unchanged

//     let root = new BinaryTreeNode(1);
//     root.left = new BinaryTreeNode(2);
//     root.right = new BinaryTreeNode(3);
//     root.right.left = new BinaryTreeNode(4);
//     root.right.right = new BinaryTreeNode(5);

//     myTreeCopy = new BinaryTree(root);

//     let serialized = BinaryTree.serialize(myTree);
//     BinaryTree.deserialize(serialized);

//     expect(myTree).toEqual(myTreeCopy);
//   });
// });

// describe("lowestCommonAncestor", function() {
//   it("returns the lowest common ancestor", function() {
//     // Failure message:
//     // failed for tree (same as test examples)
//     const root = new BinaryTreeNode(3);
//     const tree = new BinaryTree(root);

//     /* build left subtree */

//     const left = new BinaryTreeNode(5);
//     root.left = left;

//     const leftLeft = new BinaryTreeNode(6);
//     left.left = leftLeft;

//     const leftRight = new BinaryTreeNode(2);
//     left.right = leftRight;

//     const leftRightLeft = new BinaryTreeNode(7);
//     leftRight.left = leftRightLeft;

//     const leftRightRight = new BinaryTreeNode(4);
//     leftRight.right = leftRightRight;

//     /* build right subtree */

//     const right = new BinaryTreeNode(1);
//     root.right = right;

//     const right_left = new BinaryTreeNode(0);
//     right.left = right_left;

//     const right_right = new BinaryTreeNode(8);
//     right.right = right_right;

//     expect(tree.lowestCommonAncestor(left, right)).toBe(root);
//     expect(tree.lowestCommonAncestor(leftRight, leftRightLeft)).toBe(leftRight);
//     expect(tree.lowestCommonAncestor(leftRightLeft, leftLeft)).toBe(left);
//     expect(tree.lowestCommonAncestor(right_left, right_right)).toBe(right);
//   });
// });