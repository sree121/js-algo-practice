import { SinglyLinkedList } from './LinkedList.js';
exports.LinkedList = function() {
  const list = new SinglyLinkedList();
  list.push('111');
  list.push('222');
  list.push('333');
  // list.pop();
  console.log(list);
  const res = list;
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
