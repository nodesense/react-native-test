
jest.mock("./math"); //mocking __mocks__/math.js

// ./math refers to __mocks__/math.js
import {add, sub} from "./math";

describe("Mock test suites", () => {
    it ("mock sub method ", () => {
        // creates a mock function
        let subFn = jest.fn();

         subFn(20, 10);

        // subFn(20, 10);

        // at least called one time
        expect(subFn).toBeCalled();

        // exact number of times
        expect(subFn).toHaveBeenCalledTimes(1);
        expect(subFn).toHaveBeenCalledWith(20, 10);


    })

    it( "mock add ", () => {
        // calls __mocks__/math functions
        expect(add(10, 20)).toBe(3000);
        expect(sub(10, 20)).toBe(-10);
        
    })
})