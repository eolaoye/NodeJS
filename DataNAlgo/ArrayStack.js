//create a stack using and array as the base data structure

class ArrayStack {
  constructor(value = null) {
    this.data = value ? [value] : [];
  } 

  topIndex() {
    return this.data.length - 1;
  }

  peek() {
    //look at what is at the top
    if (this.data.length < 1) {
      return null;
    }

    const topValue = this.data[this.data.length - 1];
    console.log(topValue);
    return topValue;
  }

  push(value){
    this.data.push(value);

    return this.data.length;
  }

  pop() {
    //remove the top value if there is something in the stack
    if (this.data.length < 1) {
      return null;
    }
    
    const popValue = this.data.pop();
    console.log(popValue);
    return popValue;
  }

  popAll() {
    while (this.data.length > 0) {
      this.pop();
    }

    return this;
  }

  isEmpty() {
    return this.data.length == 0;
  }
}

const myStack = new ArrayStack('google');
myStack.peek();
// myStack.push('udemy');
// myStack.push('Discord');

// myStack.popAll();
