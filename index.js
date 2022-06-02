// run `node index.js` in the terminal
import Node from './Node/Node.js';
import SList from './SList/SList.js';
const node1 = new Node(0);
const sList = new SList();

// sList.prepend(22);

sList.append(node1);
sList.append(33);
sList.prepend(-11);

console.log('Initial Values: ', sList.toArray());
// console.log(sList, sList.length);
sList.delete(0);

console.log('====> Final List', sList.toArray());
