// Create a linked List
// 10 --> 5 --> 16

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(value = null) {
    this.first = value ? new Node(value) : null;;
    this.last = this.first;

    this.length = value ? 1 : 0;
  } 

  peek() {
    //look at what is at the first
    if (this.length < 1) {
      return null;
    }

    console.log(this.first.value);
    return this.first.value;
  }

  enqueue(value){
    //add a second Node to the list
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }
    else {
      this.last.next = newNode;
    }
    
    this.last = newNode;

    this.length++;

    return this.length;
  }

  dequeue() {
    //remove the first value if there is something in the Queue
    if (this.length < 1) {
      return null;
    }
    
    const dequeueValue = this.first;
    this.first = dequeueValue.next;

    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    console.log(dequeueValue.value)
    return dequeueValue.value;
  }

  dequeueAll() {
    while (this.length > 0) {
      this.dequeue();
    }

    return this;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myQueue = new Queue('google');

myQueue.enqueue('udemy');
myQueue.enqueue('Discord');

myQueue.dequeueAll();
