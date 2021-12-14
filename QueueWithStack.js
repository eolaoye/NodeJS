// Create a linked List
// 10 --> 5 --> 16

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value = null) {
    this.top = value ? new Node(value) : null;
    this.bottom = this.top;
    this.length = value ? 1 : 0;
  } 

  peek() {
    //look at what is at the top
    if (this.length < 1) {
      return null;
    }

    console.log(this.top.value);
    return this.top.value;
  }

  push(value){
    //replace the top and increment the length
    const newNode = new Node(value, this.top);
    this.top = newNode;

    if (this.length === 0) {
      this.bottom = newNode;
    }

    this.length++;

    return this.length;
  }

  pop() {
    //remove the top value if there is something in the stack
    if (this.length < 1) {
      return null;
    }
    
    const popValue = this.top;
    this.top = popValue.next;

    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    console.log(popValue.value)
    return popValue.value;
  }

  popAll() {
    while (this.length > 0) {
      this.pop();
    }

    return this;
  }

  isEmpty() {
    return this.length == 0;
  }
}

// const myStack = new Stack('google');

// myStack.push('udemy');
// myStack.push('Discord');

// myStack.popAll();

var MyQueue = function (value) {
  this.myStack = new Stack(value);
  this.reverseStack = new Stack(value);
  this.length = value ? 1 : 0;
  this.myStack.peek();
}

MyQueue.prototype.push = function(value) {
  if (this.length === 0) {
    this.myStack = new Stack(value);
    this.reverseStack = new Stack(value);
    this.length = 1;
    return this.length;
  }

  //create a temp Stack
  //push value into temp stack
  //pop all valid myStack elements into temp stack
  //my stack still holds values that have been popped
  //pop all reverseStack into myStack
  //push value into myStack
  //point reverseStack to tempStack

  const tempStack = new Stack(value);
  
  //pop all valid myStack elements into temp stack
  //my stack still holds values that have been popped
  for (let i = 0; i < this.length; i++) {
    tempStack.push(this.myStack.pop());
  }
    
  //pop all reverseStack into myStack
  while(this.reverseStack.peek()) {
    this.myStack.push(this.reverseStack.pop());
  }

  //push value into myStack
  this.myStack.push(value);
  
  //point reverseStack to tempStack
  this.reverseStack = tempStack;

  this.length++;
  return this.length;
}

MyQueue.prototype.pop = function() {
  this.length--;
  return this.reverseStack.pop(); 
}

MyQueue.prototype.peek = function() {
  return this.reverseStack.peek();
}

MyQueue.prototype.popAll = function() {
  this.length = 0;
  return this.reverseStack.popAll();
}

const myQueue = new MyQueue('google');

myQueue.push('udemy');
myQueue.push('Discord');
console.log(myQueue);
myQueue.popAll();