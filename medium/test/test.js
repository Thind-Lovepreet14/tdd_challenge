const chai = require('chai');
const userIDChecker = require('../app');
const chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);

describe('userIDChecker', function() {
    it('UserID should be valid', () => {
        const response = userIDChecker('lordFarquad!');
        response.then(res => expect(res).to.equal('UserID was not found. Would you like to register for the site?'))
    })
    it('Should let user have access to application', () => {
        const response = userIDChecker('unkindGizmo!');
        response.then(res => expect(res).to.equal(true));
    })
    it('Deny user from app', async() => {
        const response = userIDChecker('smxsom');
        await expect(response).to.eventually.be.rejectedWith("User not authorized to access the site.")
    })
})