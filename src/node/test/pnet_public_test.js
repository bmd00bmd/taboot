var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');
var chaiHttp = require('chai-http');

 describe('Public Tests', function() {
     
     it("pnet.blog.get()", function(done) {
         var pnet = new PNetPlus().pnet;
         pnet.blog.get(function(err, data) {
            expect(data.length).to.not.equal(0).then(done());
         });
     });
     
     it("pnet.blog.item.get()", function(done) {
         var pnet = new PNetPlus().pnet;
         pnet.blog.item.get('1471829356', function(err, data) {
             var obj = JSON.parse(data.toString());
             expect(obj['id']).to.equal('1471829356');
             done();
         });
     });
 });