var chai = require('chai');
var expect = chai.expect;
var Taboot = require('./../src/taboot');
var chaiHttp = require('chai-http');

 describe('Public Tests', function() {
 var apikey = '-';
     it("pnet.blog.get()", function(done) {
         var pnet = new Taboot(apikey).pnet;
         pnet.blog.get(function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
         });
     });
     
     it("pnet.blog.item.get()", function(done) {
         var pnet = new Taboot(apikey).pnet;
         pnet.blog.item.get('1471829356', function(err, data) {
             expect(data['id']).to.equal('1471829356');
             done();
         });
     });
 });