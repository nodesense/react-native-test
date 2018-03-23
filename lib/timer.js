// async code with promise

//return results after two seconds
// returns a promise object
// fails on negative numbers
export function asyncAdd(a, b) {
    return new Promise(function(resolve, reject){
        setTimeout( () => {
            if (a >= 0 && b >= 0) {
                let result = a + b;
                console.log("RESOLVE");
                resolve(result); // then method
            } else {
                reject("No negative numbers"); //catch
            }
        }, 6000);
    })
}

 

// asyncAdd(10, 20)
// .then (result => {

// })
 