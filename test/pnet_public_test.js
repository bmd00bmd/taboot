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
    
    it("pnet.news.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.news.get(function(err, data) {
            expect(data[0]['newsid']).to.be.above(0);
            done();
        })
    });
    
    it("pnet.news.comments.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.news.comments.get(function(err, data) {
            expect(data[0]['commentid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.reviews.recent()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.reviews.recent(function(err, data) {
            expect(data[0]['commentid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.upcoming()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.shows.upcoming(function(err, data) {
            expect(data.length).to.be.above(1);
            done();
        });        
    });
    
    it("pnet.shows.setlists.latest()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var nonlinked = -1;
        pnet.shows.setlists.latest(nonlinked, function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.random()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.shows.setlists.random(function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.recent()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.shows.setlists.recent(function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.tiph()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.shows.setlists.tiph(function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.artists.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.artists.get(function(err, data) {
            expect(data[0]['artist']).to.equal('Phish');
            done();
        });
    });
 });