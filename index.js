// run `node index.js` in the terminal
import Node from './Node/Node.js';
import SList from './SList/SList.js';
const node1 = new Node(0);
const sList = new SList();
console.log('Initial Values: ', sList, sList.length);

sList.append(node1);
// console.log(sList, sList.length);

sList.append(33);
// console.log(sList, sList.length);

sList.prepend(22);
// console.log(sList, sList.length);
console.log('====> Final List', sList.toArray());

console.log('====> Final List', sList.reverse().toArray());
console.log('====> Final List', sList.reverse().toArray());
