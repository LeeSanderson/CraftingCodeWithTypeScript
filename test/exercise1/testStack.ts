import { suite, test } from "@testdeck/mocha";
import { Stack } from "../../src/exercise1/stack";
import { assert, expect } from "chai";


@suite class StackTests extends Stack {
    @test "pop returns last pushed item"() {
        let item: Object = 200;
        this.push(item);
        assert(this.pop() == item);
    }

    @test "pop throws exception if stack is empty"() {
        expect(() => this.pop()).to.throw(RangeError, "Stack is empty");
    }
}