import {asyncAdd} from "./timer";

xdescribe("async test suite ", () => {

    // done is a function
    // for async tests
    // done must be called after test completion
    it ("should add async add ", (done) => {
        asyncAdd(10, 20)
        .then ( result => {
            console.log("THEN");
            //FIXME: Time out for failure
            expect(result).toBe(30);
            done(); // let jest know that test is completed
        })
        .catch( (error) => {
            expect(true).toBe(false);
            done();
        })

        console.log("DONE");
    }, 5000)

    it ("should add async reject for negative ", (done) => {
        asyncAdd(-1, -2)
        .then ( result => {
            console.log("THEN");
           
            expect(true).toBe(false);

            done(); // let jest know that test is completed
        })
        .catch ( error => {
            expect(error).toBe("No negative numbers");
            done();
        })

        console.log("DONE");
    }, 5000)


})