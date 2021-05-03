function JSStack() {
    this.stack = [];
    this.maxSize = 10;
    this.stackSize = 0;
}
  
JSStack.prototype = {
    push: function(value) {
        if(this.stackSize >= this.maxSize) {
            console.log('Stack OverFlow');
            return
        }
        this.stack.push(value);
        this.stackSize += 1;
    },
    
    pop: function() {
        if(this.stackSize === 0) {
            console.log('Stack UnderFlow');
            return
        }
        this.stack.pop();
        this.stackSize -= 1;
    },
    
    getLength: function() {
        return this.stackSize;
    },
    
    getTop: function() {
        const elementOnTopOfStack = this.stack[this.stackSize - 1];
        if(elementOnTopOfStack) {
            return elementOnTopOfStack
        }
        console.log('nothing on top');
    }
}
  
const jsstack = new JSStack();

jsstack.push('hello');
console.log('jsstack ', jsstack);

jsstack.getTop();
console.log('jsstack ', jsstack);

jsstack.pop();
console.log('jsstack ', jsstack);

jsstack.push('hi');
jsstack.push('world');
jsstack.push('whatsapp');

console.log(jsstack.getLength());