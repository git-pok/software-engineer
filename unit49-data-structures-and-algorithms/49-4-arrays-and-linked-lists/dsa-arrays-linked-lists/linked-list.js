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
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      const ogHead = this.head;
      this.head = newNode;
      this.head.next = ogHead;
      this.length++;
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
          this.length--;
          return oldTail;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("Empty List");
    } else if (this.length === 1) {
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead;
    } else {
      let currentNode = this.head;
      const oldHead = currentNode;
      this.head = currentNode.next;
      this.length--;
      return oldHead;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0) {
      throw new Error("Empty List");
    } else if (idx === 0) {
      return JSON.parse(JSON.stringify(this.head));
    } else if (idx === this.length - 1) {
      return JSON.parse(JSON.stringify(this.tail));
    } else if (idx >= this.length) {
      throw new Error(`No Value At Idx: ${idx}`);
    } else {
      let currentNode = this.head;
      while (idx > 0) {
        if (idx === 1) return JSON.parse(JSON.stringify(currentNode.next));
        else {
          currentNode = currentNode.next
          idx--;
        }
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx === 0) {
      this.head.val = val;
    } else if (idx === this.length - 1) {
      this.tail.val = val;
    } else if (idx >= this.length) {
      throw new Error(`No Value At Idx: ${idx}`);
    } else {
      let currentNode = this.head;
      while (idx > 0) {
        if (idx === 1) {
          currentNode.next.val = val;
          idx--;
        } else {
          currentNode = currentNode.next
          idx--;
        }
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (idx === 0) {
      const ogHead = this.head ? this.head : null;
      this.head = newNode;
      newNode.next = ogHead;
      if (!this.tail) this.tail = newNode;
      this.length++;
    } else if (idx > this.length - 1) {
      throw new Error(`${idx} index doesn't exist.`);
    } else {
      let currentNode = this.head;
      while (idx > 0) {
        if (idx === 1) {
          const newNodeNext = currentNode.next;
          newNode.next = newNodeNext;
          currentNode.next = newNode;
          this.length++;
          idx--;
        } else {
          currentNode = currentNode.next
          idx--;
        }
      }
    }
  }

  /** removeAt(idx): remove & return item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1) {
      throw new Error(`${idx} index doesn't exist.`);
    } else if (idx === 0) {
      const ogHead = this.head ? this.head : null;
      if (!ogHead) return new Error("Empty List!");
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return ogHead;
      }
      this.head = this.head.next;
      this.length--;
      if (this.length === 1) this.tail = this.head;
      return ogHead;
    } else {
      let currentNode = this.head;
      while (idx > 0) {
        if (idx === 1) {
          const ogHead = currentNode.next;
          const prevNode = currentNode;
          const ogHeadNext = currentNode.next.next;
          prevNode.next = ogHeadNext;
          this.length--;
          if (this.length === 1) this.tail = this.head;
          else if (!ogHeadNext) this.tail = prevNode;
          return ogHead;
        } else {
          currentNode = currentNode.next
          idx--;
        }
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let listLen = this.length;
    let total = 0;
    let currentNode = this.head;
    while (listLen > 0) {
      total += currentNode.val;
      if (currentNode.next) currentNode = currentNode.next;
      listLen--;
    }
    const average = total / this.length;
    return average;
  }
}

module.exports = LinkedList;
