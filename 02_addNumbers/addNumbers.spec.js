const addNumbers = require('./addNumbers')

describe('addNumbers', function() {
    it('Numbers to be added', function() {    //it can be replaced with test
        expect(addNumbers()).toBe(2);
    });
});