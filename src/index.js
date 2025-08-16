import util from 'util';
util.inspect.defaultOptions.depth = null;
util.inspect.defaultOptions.colors = true;
// import "./style.css"
import LinkedList from "./LinkedList.js"

const myFirstList = new LinkedList();


myFirstList.appendNode("My first link list node. Ya mama");

myFirstList.appendNode("Second");

myFirstList.prependNode("No wait, this on is the first");

console.log(myFirstList);

console.log('This is the number of linked list', myFirstList.getsize());

console.log('This is the head of the linked list', myFirstList.getHead());

console.log('This is the tail of the linked list', myFirstList.getTail());
