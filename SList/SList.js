import Node from '../Node/Node.js';
export default class SList {
  length = 0;
  head = null;

  constructor(head = null) {
    this.head = head;
  }

  createNewNode(value) {
    return typeof value !== 'object' ? new Node(value) : value;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data, '->');
      current = current.next;
    }
  }

  toArray() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  prepend(value) {
    const newNode = this.createNewNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  append(value) {
    const newNode = this.createNewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = newNode;
          this.length++;
          return this;
        }
        current = current.next;
      }
    }
  }

  findNth(index) {
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === index) {
        return current;
      } else {
        current = current.next;
        counter++;
      }
    }
    return null;
  }

  delete(value) {
    if (!this.head) {
      return this;
    }
    if (!this.head.next) {
      this.head = null;
      return this;
    }
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      if (current.data === value) {
        if (!prev) {
          this.head = next;
          current.next = null;
        } else {
          prev.next = next;
          current.next = null;
        }
      }
      prev = current;
      current = next;
    }
    return this;
  }

  swapNodes(a, b) {
    // basically you have to awap four links
    // two previous.next to the new destination : other curent node
    // two current.next to the new destination : other current.next node
    // previous nodes can be null. If that's the case then move head's pointer to other curent node

    if (a === b) {
      return this;
    }

    let currentA = this.head;
    let prevA = null;
    while (currentA && currentA.data !== a) {
      prevA = currentA;
      currentA = currentA.next;
    }

    let currentB = this.head;
    let prevB = null;
    while (currentB && currentB.data !== b) {
      prevB = currentB;
      currentB = currentB.next;
    }

    if (currentA == null || currentB == null) {
      return this;
    }
    if (!prevA) {
      this.head = currentB;
    } else {
      prevA.next = currentB;
    }
    if (!prevB) {
      this.head = currentA;
    } else {
      prevB.next = currentA;
    }

    let temp = currentA.next;
    currentA.next = currentB.next;
    currentB.next = temp;
  }
}
