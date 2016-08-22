var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');

// Credentials 
const username = '-';
const pwd = '-';
const apikey = '-';

// Anti success
const failure = 0;

 describe('Authentication Tests', function() {
     it('pnet.api.authorize()', function(done) {
        var pnet = new PNetPlus().pnet;
        pnet.api.authorize(apikey, username, pwd, function(err, data) {
            expect(JSON.parse(data)['success']).to.equal(1);  
            done();
        });  
     });
 });