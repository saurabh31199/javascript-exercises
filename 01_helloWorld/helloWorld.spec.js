const helloWorld = require('./helloWorld');   //This imports the code from javascript file helloWorld.js so we can test it.

// the next block is running our code in helloWorld.js file to see if the output is correct
describe('Hello World', function () {   // This is body of the test
    test('says "Hello, World!"', function () {      //this function describes what should be happening in plain english
        expect(helloWorld()).toEqual('Hello, World!');     //this function tells how program output should behave
    });
});