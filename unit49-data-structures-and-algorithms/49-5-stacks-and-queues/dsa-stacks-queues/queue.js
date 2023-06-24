/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newQueue = new Node(val);
    if (val === undefined) {
      throw new Error(`Missing enqueue arguments!`);
    } else if (this.size === 0) {
      this.first = newQueue;
      this.last = newQueue;
      this.size++;
    } else {
      this.last.next = newQueue;
      this.last = newQueue;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error(`No items in Queue!`);
    } else if (this.size === 1) {
      const removedQue = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return removedQue;
    } else {
      const removedQue = this.first;
      this.first = this.first.next;
      this.size--;
      return removedQue;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
