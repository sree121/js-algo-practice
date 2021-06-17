import { Node } from './ListNode';
export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    //loop till next is null and assign tail to newtail
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    return currHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    let currentHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    if (!index || !val) return false;
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //   currNode = this.head

  // prev
  // 100	200	300	400		400	200	300	100
  // 		      next
  // 	  currnode
  // 					           200	100	null
  // 100

  // next = currNode.next;
  // currNode.next = prev
  // prev = node
  // node = next

  remove(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.pop(val);
    if (index === 0) return !!this.shift(val);
    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var currrentnode = this.head;
    this.head = this.tail;
    this.tail = currrentnode;
    [100, 200, 300];
  }
}
