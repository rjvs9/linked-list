// run `node index.js` in the terminal
import Node from './Node/Node.js';
import SList from './SList/SList.js';
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
// node5.next = node1;
const sList = new SList();

// sList.prepend(22);

sList.append(node1);
sList.append(node2);
sList.append(node3);
sList.append(node4);
sList.append(node5);

// console.log('Initial Values: ', sList.toArray())
const loopDetected = sList.detectLoop();
console.log('====> Final List', loopDetected);
