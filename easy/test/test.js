const expect = require('chai').expect;
const numChar = require('../app');

describe('numChar', function() {
    it('should count the length of the string and the index of the first character', function() {
        expect(numChar('dog')).to.deep.equal({length: 3,location: 'd'})
    });

    it('should throw an error if the input is not a string', function() {
        expect(() => {numChar(9)}).to.throw(Error,'The parameter must be a string')
    })
    it('should return an object', function() {
        expect(numChar('cat')).to.be.an('object')
    })
})