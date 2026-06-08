const helloWorld = function () {
    return "Hello, World!";       //Normal function that returns 'Hello World' string     
}

module.exports = helloWorld;    //this is what we export the function so that it can be imported with require in .spec file