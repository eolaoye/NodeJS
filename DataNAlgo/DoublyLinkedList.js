// Create a linked List
// 10 --> 5 --> 16

class DNode {
  constructor(value, previous=null, next=null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
    this.printList();
  }

  append(value) {
    //create new node
    const newNode = new DNode(value, this.tail);

    //point old tail to new tail
    this.tail.next = newNode;

    //set the new tail as the tail
    this.tail = newNode;

    //update the length
    this.length++;
    
    this.printList();
    return this;
  }

  prepend(value) {
    //create new node
    const newNode = new DNode(value, null, this.head);

    //point old head to new head
    this.head.previous = newNode;

    //set the new head
    this.head = newNode;

    //update the length
    this.length++;

    this.printList();
    return this;
  }

  getNodeBeforeIndex(index) {
    if (index <= 0) {
      return null;
    }

    if (!index || index > this.length) {
      return this.tail;
    }

    if (index == 1) {
      return this.head;
    }

    let counter = 0;
    let currentNode = this.head;
    while(currentNode != null && counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  getNodeAtIndex(index) {
    if (index < 0) {
      return null;
    }

    if (index == 0) {
      return this.head;
    }

    if (!index || index >= this.length) {
      return this.tail;
    }
    
    return index > this.length / 2 ? 
              this._getNodeAtSecondHalfIndex(index) :
              this._getNodeAtFirstHalfIndex(index)
  }

  _getNodeAtFirstHalfIndex(index) {
    
    let counter = 0;
    let currentNode = this.head;
    while(currentNode != null && counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  _getNodeAtSecondHalfIndex(index) {
    
    let counter = 0;
    let currentNode = this.tail;
    while(currentNode != null && counter < this.length - index) {
      currentNode = currentNode.next;
      counter--;
    }

    return currentNode;
  }

  insert(index, value) {

    if (!index || index >= this.length) {
      return this.append(value);
    }

    if (index <= 0) {
      return this.prepend(value);
    }

    const beforeNode = this.getNodeAtIndex(index - 1);

    //point the new node to "after" = beforeNode.next
    //create the new node
    const newNode = new DNode(value, beforeNode, beforeNode.next);

    //point afterNode back to new Node
    const afterNode = newNode.next;
    afterNode.previous = newNode;

    //point "before" to the new node
    beforeNode.next = newNode;
    this.length++;

    this.printList();
    return this;
  }

  remove(index) {

    if (index === 0) {
      const secondNode = this.head.next;
      secondNode.previous = null;

      this.head = secondNode;

      this.length--;
      this.printList(); 
      return this;
    }

    if (!index || index >= this.length || index < 0 || index === this.length) {
      this.printList();
      return this;
    }

    const beforeNode = this.getNodeAtIndex(index - 1);
    const nodeToBeDeleted = beforeNode.next;
    const afterNode = nodeToBeDeleted.next;

    afterNode.previous = beforeNode;
    beforeNode.next = afterNode; 

    this.length--;
    this.printList();
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.remove(0);
myLinkedList.remove(1);

