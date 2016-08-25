var chai = require('chai');
var expect = chai.expect;
var Taboot = require('./../src/taboot');
var chaiHttp = require('chai-http');

 describe('Protected Tests', function() {
     
    const apikey = '';
    const username = '';
    const userid = '1'
    
    // Same show
    const showdate = '2015/08/22';
    const showid = '1426718300';
    
    const collectionid = '1294152220';
    
    it("pnet.forum.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // No options
        pnet.forum.get(function(err, data) {
            expect(data[0]['threadid']).to.be.above(100);
            done();
        });
    });
    
    it("pnet.forum.thread.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            threadid: '1'
        }
        pnet.forum.thread.get(options, function(err, data) {
            expect(data.length).to.be.above(0);
            done();
        });        
    });
    
    it("pnet.forum.canpost()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            username: username
        }
        pnet.forum.canpost(options, function(err, data) {
            expect(data['canpost']).to.equal(1);
            done();
        });        
    });
    
    // TODO: This is not working!
    it("pnet.reviews.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            showdate: showdate,
            pnetcb: undefined
        }
        pnet.reviews.query(options, function(err, data) {
            expect(data[0]['commentid']).to.be.above(1);
            done();
        });        
    });
    
    it("pnet.shows.setlists.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // You must pass either a showdate or a showid for this method to work. 
        // In case of conflict, the showid will win.
        var options = {
            showdate: showdate,
            showid: undefined,
            pnetcb: undefined
        }
        pnet.shows.setlists.get(options, function(err, data) {
            expect(data[0]['showid']).to.equal('1426718300');
            done();
        });        
    });
    
    it("pnet.shows.links.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            showid: showid,
            pnetcb: undefined
        }
        pnet.shows.links.get(options, function(err, data) {
            expect(data[0]['type']).to.equal('Audience Recording');
            done();
        });        
    });
    
    // This not working!!
    it("pnet.shows.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // supports optional parameters
        // http://api.phish.net/docu/#p=pnet.shows.query
        var options = {
            year: 2015,
            // venueid: undefined,
            state: 'TX',
            // country: undefined,
            // month: undefined,
            // day: undefined,
            // artist: undefined,
            // showids: undefined, // comma delimited string,
            pnetcb: undefined
        }
        pnet.shows.query(options, function(err, data) {
            expect(data[0]['showid']).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.collections.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            collectionid: collectionid,
            pnetcb: undefined
        }
        pnet.collections.get(options, function(err, data) {
            expect(data['uid']).to.equal(1);
            done();
        });        
    });
    
    it("pnet.collections.query()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            userid: userid,
            pnetcb: undefined
        }
        pnet.collections.query(options, function(err, data) {
            expect(data[0]['collectionid']).to.equal(1294084647);
            done();
        });     
    });
    
    it("pnet.user.username.check()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            username: username
        }
        pnet.user.username.check(options, function(err, data) {
            expect(data['success']).to.be.above(-1);
            done();
        });        
    });
    
    it("pnet.user.uid.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        var options = {
            username: username
        }
        pnet.user.uid.get(options, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.user.myshows.get()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // supports one or more user names; comma delimited string of usernames is optional
        var options = {
            username: username,
            usernames: undefined,
            pnetcb: undefined
        }
        pnet.user.myshows.get(options, function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
    
    it("pnet.jamcharts.all()", function(done) {
        var pnet = new Taboot(apikey).pnet;
        // No options
        pnet.jamcharts.all(function(err, data) {
            expect(data).to.not.equal(undefined);
            done();
        });        
    });
 }); 
    /**
     * 
     * Methods that write data
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
