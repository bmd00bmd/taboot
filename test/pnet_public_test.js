var chai = require('chai');
var expect = chai.expect;
var Taboot = require('./../src/taboot');
var chaiHttp = require('chai-http');

 describe('Public Tests', function() {
     
    var apikey = '';
 
    it("pnet.blog.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // takes no options
        pnet.blog.get(function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });
    });
    
    it("pnet.blog.item.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            blogid: '1471829356'
        }
        pnet.blog.item.get(options, function(err, data) {
            expect(data['id']).to.equal('1471829356');
            done();
        });
    });
    
    it("pnet.news.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.news.get(options, function(err, data) {
            expect(data[0]['newsid']).to.be.above(0);
            done();
        })
    });
    
    it("pnet.news.comments.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.news.comments.get(options, function(err, data) {
            expect(data[0]['commentid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.reviews.recent()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.reviews.recent(options, function(err, data) {
            expect(data[0]['commentid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.upcoming()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.shows.upcoming(options, function(err, data) {
            expect(data.length).to.be.above(1);
            done();
        });        
    });
    
    it("pnet.shows.setlists.latest()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            nonlinked: -1,
            pnetcb: undefined
        }
        pnet.shows.setlists.latest(options, function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.random()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.shows.setlists.random(options, function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.recent()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.shows.setlists.recent(options, function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.shows.setlists.tiph()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            pnetcb: undefined
        }
        pnet.shows.setlists.tiph(options, function(err, data) {
            expect(data[0]['showid']).to.be.above(0);
            done();
        });
    });
    
    it("pnet.artists.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // No options
        pnet.artists.get(function(err, data) {
            expect(data[0]['artist']).to.equal('Phish');
            done();
        });
    });
 });