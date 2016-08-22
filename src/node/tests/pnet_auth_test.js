var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');

// Credentials 
var username = '-';
var secret = '-';

// Anti success
const failure = 0;


 describe('Authentication Tests', function() {
     it('pnet.api.authorize()', function() {
        var pnet = new PNetPlus().pnet;
        expect(pnet.api.authorize(username, secret)['success']).to.equal(!failure);           
     });
     
     it('pnet.api.authorized.check()', function() {
        var pnet = new PNetPlus().pnet;
        var user = pnet.api.authorize(username, secret);
        expect(pnet.api.authorized.check(user)['success']).to.equal(!failure);           
     });
     
     it('pnet.api.authkey.get()', function() {
        var pnet = new PNetPlus().pnet;
        expect(pnet.api.authkey.get(username)['success']).to.equal(!failure);           
     });
 });