/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newStack = new Node(val);
    if (val === undefined) {
      throw new Error(`Missing push arguments!`);
    } else if (this.size === 0) {
      this.first = newStack;
      this.last = newStack;
      this.size++;
    } else {
      newStack.next = this.first;
      if (this.size === 1) this.last = this.first;
      this.first = newStack;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error(`No stacks in Stack!`);
    const removedStack = this.first.val;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return removedStack;
    } else {
      this.first = this.first.next;
      this.size--;
      return removedStack;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) throw new Error("No stacks in Stack!");
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
