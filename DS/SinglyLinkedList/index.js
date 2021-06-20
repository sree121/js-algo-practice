import { SinglyLinkedList } from './LinkedList.js';
exports.SinglyLinkedList = function() {
  const list = new SinglyLinkedList();
  list.push('111');
  list.push('222');
  list.push('333');
  // list.pop();
  list.reverse();
  const res = list.print();
  console.log(res);
  const appDiv = document.getElementById('app-algo');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
