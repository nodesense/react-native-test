
// xdescribe, skip the test

xdescribe("This test suite won't be executed", () => {
    it("should not run due to xdescribe", () => {
        expect(true).toBe(false);
    })
 
})


describe("test with xit ", () => {
    // skip this test
    xit("won't run ", () => {
        expect(true).toBe(false);
    })
})