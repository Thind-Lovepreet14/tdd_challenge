const expect = require('chai').expect;
const request = require('request');

it('Checks if endpoints are functional', function(done) {
    request('http://localhost:3000/api/food', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done()
    });
})

it('returns an array', function(done) {
    request('http://localhost:3000/api/food', function(error,response,body) {
        let newData = JSON.parse(body)
        expect(newData).to.be.an('array')
        done();
    });
});

it('returns a reversed string', function(done) {
    request('http://localhost:3000/api/string', function(error,response,body) {
        expect(body).to.not.equal('name')
        done()
    })
})
