var chai = require('chai');
var expect = chai.expect;
var Taboot = require('./../src/taboot');

// Credentials 
const username = '-';
const pwd = '-';
const apikey = '-';

// Anti success
const failure = 0;

 describe('Authentication Tests', function() {
     it('pnet.api.authorize()', function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.api.authorize(username, pwd, function(err, data) {
            expect(data['success']).to.equal(1);  
            done();
        });  
     });
 });