import Node from "./Node.js"
class LinkedList {
    constructor() {
        this.head = null;
    }

    appendNode(data) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = data;
            this.head.nextNode = null;
            return 
        }; 

        let currentNode = this.head;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
        currentNode.nextNode = new Node();
        currentNode.nextNode.value = data;

    };
};

export default LinkedList