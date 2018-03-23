// BDD - Bahavior Driven Development
import {add} from "./math";

 // jasmine keyword
 describe ("math test suite", () => {

    // called before each test case ie it()
    //setup test env
    beforeEach( () => {
        console.log("**Before Each test");
    })    

    // clean up test env
    afterEach( () => {
        console.log("**After Each test");
    })


    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    })

    // boundary, range
    it("should add -ve +ve numbers", () => {
        expect(add(1, -2)).toBe(-1);
    })


    // boundary, range
    it("should add -ve -ve numbers", () => {
        expect(add(-1, -2)).toBe(-3);
    })

 })