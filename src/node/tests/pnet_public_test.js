var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');

 describe('Public Tests', function() {
     it("pnet.blog.get()", function() {
         var pnet = new PNetPlus().pnet;
         expect(pnet.blog.get()['success']).to.equal(1);
     });
     
     it("pnet.blog.item.get()", function() {
         var pnet = new PNetPlus().pnet;
         expect(pnet.blog.item.get('2341')['success']).to.equal(1);
     });
 });