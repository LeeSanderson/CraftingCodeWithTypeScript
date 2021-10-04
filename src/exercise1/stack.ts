
export class Stack {
    private items = new Array<object>();

    public push(item: object) {
        this.items.push(item);
    }

    public pop() : object {
        if (this.items.length == 0) {
            throw new RangeError("Stack is empty");
        }

        return this.items.pop();
    }
}