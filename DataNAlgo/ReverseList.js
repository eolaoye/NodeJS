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

  reverseBrute() {
    if (this.length <= 1){
      return this;
    }

    //create an array that holds the values
    const array = [this.head.value];
    let currentNode = this.head;

    while(currentNode.next != null){
      currentNode = currentNode.next;
      array.push(currentNode.value);
    }

    //reverse loop through the array and create the reversed linked list
    const reversedList = new LinkedList(currentNode.value)
    for (let i = array.length -2; i >= 0; i--) {
      reversedList.append(array[i]);
    }

    //return the reversed linked list
    reversedList.printList();
    return reversedList;
  }


  reverse() {
    // handle singleton    

    //hold set of contiguous threes,
    //point the second to the first
    //shift the set of three one step forward until there is no second
    //set the tail as the previous head
    //set the first in the set of threes as the head

    // handle singleton    
    if (this.length <= 1) {
      this.printList();
      return this;
    }

    
    //hold set of contiguous threes,
    let first = this.head;
    let second = first.next;

    //until there is no second
    while(second) {
      //point third to the node after second
      let third = second.next;

      //point the second to the first
      second.next = first;

      //shift the set of three one step forward 
      first = second; //point first to where second is pointing
      second = third; //point second to where third is pointing
    }

    this.tail = this.head;
    this.tail.next = null; //regularize the tail

    //set the new head
    this.head = first;

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

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(undefined, 99);
myLinkedList.remove(0);
myLinkedList.reverse();

