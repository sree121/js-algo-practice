import { SinglyLinkedList } from './LinkedList.js';
exports.LinkedList = function() {
  const list = new SinglyLinkedList();
  list.push('10');
  list.push('10---0');
  list.push('220');
  // list.pop();
  console.log(list);
};
