import { expect } from "chai";
import "mocha";
import { Hello } from "./hello";

describe("Hello class", () => {

    describe("When sayHello() called", () => {

        it("Should return 'Hello [name of person]!", () => {
            const hello = new Hello();
            expect(hello.sayHello("Farooq")).to.equal("Hello Farooq!");
        });
    });
});
