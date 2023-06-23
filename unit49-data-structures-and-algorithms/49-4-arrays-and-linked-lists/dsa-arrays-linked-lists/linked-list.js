/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length ++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length ++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length ++;
    } else {
      const ogHead = this.head;
      this.head = newNode;
      this.head.next = ogHead;
      this.length ++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("Empty List");
    } else if (this.length === 1) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.next.next === null) {
          const oldTail = currentNode.next;
          this.tail = currentNode;
          this.tail.next = null;
          this.length --;
          return oldTail;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
