var chai = require('chai');
var expect = chai.expect;
var PNetPlus = require('./../pnetplus');

 describe('pnetplus', function() {
     it('getLatestSet() returns the single latest setlist', function() {
        var pnetplus = new PNetPlus();
        var result = pnetplus.GetLatestSet();
        expect(result).to.equal(0);
     });
     
     it('getSetlist() returns one setlist that is passed as an arg', function() {
        var pnetplus = new PNetPlus();
        var result = pnetplus.GetSet('07/19/2016');
        expect(result).to.equal('07/19/2016');
     });
 });