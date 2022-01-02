// Create a linked List
// 10 --> 5 --> 16

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
    this.printList();
  }

  append(value) {
    //create new node
    const newNode = new Node(value);

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
    const newNode = new Node(value, this.head);

    //set the new head
    this.head = newNode;

    //update the length
    this.length++;

    this.printList();
    return this;
  }

  insert1(index, value) {

    if (index <= 0) {
      return this.prepend(value);
    }

    if (!index || index >= this.length) {
      return this.append(value);
    }

    let currentNode = this.head;
    let beforeNode = null;
    let counter = 0;

    //get the node before the index --> before
    //get the node at the index --> current
    while(currentNode != null && counter < index) {
      beforeNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    //point the new node to "after"
    //create the new node
    const newNode = new Node(value, currentNode);

    //point "before" to the new node
    beforeNode.next = newNode;
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
    
    let counter = 0;
    let currentNode = this.head;
    while(currentNode != null && counter < index) {
      currentNode = currentNode.next;
      counter++;
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
    const newNode = new Node(value, beforeNode.next);

    //point "before" to the new node
    beforeNode.next = newNode;
    this.length++;

    this.printList();
    return this;
  }

  remove(index) {

    if (index === 0) {
      this.head = this.head.next;

      this.length--;
      this.printList(); 
      return;
    }

    if (!index || index >= this.length || index < 0 || index === this.length) {
      this.printList();
      return;
    }

    const beforeNode = this.getNodeAtIndex(index - 1);

    beforeNode.next = beforeNode.next.next; 

    this.length--;
    this.printList();
    return;
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

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(undefined, 99);
myLinkedList.remove(0);

