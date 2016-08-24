var chai = require('chai');
var expect = chai.expect;
var Taboot = require('./../src/taboot');
var chaiHttp = require('chai-http');

 describe('Protected Tests', function() {
     
    const apikey = '';
    const username = '';
    const userid = ''
    
    // Same show
    const showdate = '2015/08/22';
    const showid = '1426718300';
    
    const collectionid = '';
    
    it("pnet.forum.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.forum.get(function(err, data) {
            expect(data[0]['threadid']).to.be.above(100);
            done();
        });
    });
    
    it("pnet.forum.thread.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var threadid = 123456789
        pnet.forum.thread.get(threadid, function(err, data) {
            expect(data[0]['username']).to.equal("Phish.net");
            done();
        });        
    });
    
    it("pnet.forum.canpost()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.forum.canpost(username, function(err, data) {
            expect(data['canpost']).to.equal(1);
            done();
        });        
    });
    
    // TODO: This is not working!
    it("pnet.reviews.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.reviews.query(username, showdate, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    
    it("pnet.shows.setlists.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // You must pass either a showdate or a showid for this method to work. 
        // In case of conflict, the showid will win.
        pnet.shows.setlists.get(showdate, function(err, data) {
            expect(data[0]['showid']).to.equal('1426718300');
            done();
        });        
    });
    
    it("pnet.shows.links.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.shows.links.get(showid, function(err, data) {
            expect(data[0]['type']).to.not.equal('Audience Recording');
            done();
        });        
    });
    
    // This not working!!
    it("pnet.shows.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // supports optional parameters
        // http://api.phish.net/docu/#p=pnet.shows.query
        pnet.shows.query(function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.collections.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.collections.get(collectionid, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.collections.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.collections.query(userid, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.user.username.check()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.user.username.check(username, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.user.uid.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.user.uid.get(username, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.user.myshows.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // supports one or more user names; comma delimited string of usernames is optional
        pnet.user.myshows.get(username, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.jamcharts.all()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        pnet.jamcharts.all(function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    /**
     * Methods that write data
     * 
     * 
     * 
    it("pnet.user.myshows.add()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    
    
    it("pnet.user.myshows.remove()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    
    it("pnet.user.shows.rate()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    it("pnet.user.register()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    it("pnet.forum.thread.new()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    it("pnet.forum.thread.respond()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        
    });
    */
 });