import { suite, test } from "@testdeck/mocha";
import { Stack } from "../../src/exercise1/stack";
import { assert, expect } from "chai";


@suite class StackShould extends Stack {
    @test "return last pushed item when pop called"() {
        let item: Object = 200;
        this.push(item);
        assert(this.pop() == item);
    }

    @test "throw an exception if stack is empty and pop called"() {
        expect(() => this.pop()).to.throw(RangeError, "Stack is empty");
    }
}