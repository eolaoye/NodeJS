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

const myStack = new Stack('google');

myStack.push('udemy');
myStack.push('Discord');

myStack.popAll();
