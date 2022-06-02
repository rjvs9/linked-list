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
}
