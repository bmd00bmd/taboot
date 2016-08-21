var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');
var failure = 0;

// Credentials 
var userName = '-';
var pwd = '-';


 describe('pnetplus', function() {
     it('AuthorizeUser() authorizes a user with their credenctials', function() {
        var pnetplus = new PNetPlus();
        var apiKey = pnetplus._Authorize(userName, pwd);
        expect(apiKey['success']).to.equal(!failure);           
     });
 });