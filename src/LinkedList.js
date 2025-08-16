import Node from "./Node.js"
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    prependNode(data) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = data;
            return 
        }; 

        let prependedNode = new Node();
        prependedNode.value = data;
        prependedNode.nextNode = this.head;
        this.head = prependedNode;
    };

    appendNode(data) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = data;
            return 
        }; 

        let currentNode = this.head;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
        currentNode.nextNode = new Node();
        currentNode.nextNode.value = data;

    };

    

    getsize() {
        if (this.head === null) throw Error('Link list is empty.');
        let total = 0;
        let currentNode = this.head
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
            total++;    
        }; 
        
        total++;
        return total;
    };


    getHead() {
        if (this.head === null) throw Error('Link list is empty.');
        return this.head;
    };

    getTail() {
        if (this.head === null) throw Error('Link list is empty.');
        
        let currentNode = this.head;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;

        return currentNode;
    };


};

export default LinkedList