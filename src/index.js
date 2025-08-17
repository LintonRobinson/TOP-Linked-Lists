// See all nested objects
import util from 'util';
util.inspect.defaultOptions.depth = null;
util.inspect.defaultOptions.colors = true;

import LinkedList from "./LinkedList.js"

/*
Tests

const myFirstList = new LinkedList();
myFirstList.appendNode("First");
myFirstList.appendNode("Second");
console.log(myFirstList.linkedListToString());
console.log('This is the actual object',myFirstList)

*/
