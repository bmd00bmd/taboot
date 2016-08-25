/**
 * Phish.net Namespace Preserving JS Wrapper
 * Author: Brent Dowdy
 * "http://api.phish.net/docu"
 */
const https = require('https');

module.exports = Taboot;
function Taboot (apikey) {
    this.pnet = {
        api: {
          authorize: function(options, cb) {
            // https://api.phish.net/api.js?api=2.0&method=pnet.api.authorize&apikey=YOURAPIKEY&username=USERNAME&passwd=USERPASSWORD
            var opt = 'method=pnet.api.authorize&apikey=' + apikey + '&username=' + options.username + '&passwd=' + options.pwd;
            Request(opt, cb);
          },
          authorized: {
              check: function(options, cb) {
                  // https://api.phish.net/api.js?api=2.0&method=pnet.api.authorized.check&apikey=YOURAPIKEY&username=USERNAME
                  var opt = 'method=pnet.api.authorized.check&apikey=' + apikey + '&username=' + options.username;
                  Request(opt, cb);
              }
          },
          authkey: {
              get: function(options, cb) {
                 // https://api.phish.net/api.js?api=2.0&method=pnet.api.authkey.get&apikey=YOURAPIKEY&username=USERNAME
                 var opt = 'method=pnet.api.authkey.get&apikey=' + apikey + '&username=' + options.username;
                 Request(opt, cb);
              }
          }
        },
        blog: {
            get: function(cb){
                // TODO: Investigate suspicious JSON parsing
                var opts = 'method=pnet.blog.get'
                Request(opts, cb);
            },
            item: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.blog.item.get&format=json&id=12345
                    var opts = 'method=pnet.blog.item.get&id=' + options.blogid;
                    Request(opts, cb);
                }
            }
        },
        forum: {
            get: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                var opt = 'method=pnet.forum.get&apikey=' + apikey;
                Request(opt, cb);
            },
            thread: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                    var opt = 'method=pnet.forum.get&apikey=' + apikey + '&threadid=' + options.threadid;
                    Request(opt, cb);
                },
                new: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.new&apikey=YOURAPIKEY&username=USERNAME&title=YOURTITLE&txt=YOUR+TEXT&authkey=AUTHKEY
                    var opt = 'method=pnet.forum.thread.new&apikey=' + apikey + '&username=' + options.username + '&title=' + options.title + '&txt=' + options.body + '&authkey=' + options.authkey;
                    Request(opt, cb);
                },
                respond: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.respond&apikey=YOURAPIKEY&username=USERNAME&thread=12345678901&txt=YOUR+TEXT&authkey=AUTHKEY
                    var opt = 'method=pnet.forum.thread.respond&apikey=' + apikey + '&username=' + options.username + '&thread=' + options.threadId + '&txt=' + options.body + '&authkey=' + options.authkey;
                    Request(opt, cb);
                }
            },
            canpost: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.canpost&apikey=YOURAPIKEY&username=USERNAME
                var opt = 'method=pnet.forum.canpost&apikey=' + apikey + '&username=' + options.username;
                Request(opt, cb);
            }
        },
        news: {
            get: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.news.get&format=json&callback=YourCallbackFunction
                var opt = 'method=pnet.news.get' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            },
            comments: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.news.comments.get&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.news.comments.get' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                }   
            }
        },
        reviews: {
            recent: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.reviews.recent&format=json&callback=YourCallbackFunction
                var opt = 'method=pnet.reviews.recent' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            },
            query: function(options, cb){
                // showdate (YYYY-mm-dd)
                // https://api.phish.net/api.js?api=2.0&method=pnet.reviews.query&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                var opt = 'method=pnet.reviews.query&apikey='+ apikey + (options.username ? '&username=' + options.username : '') + (options.showdate ? '&showdate=' + options.showdate : '') + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            }
        },
        shows: {
            setlists: {
                latest: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.latest&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.latest' + (options.linked ? '&linked=' + options.linked : '') + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                },
                random: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.random&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.random' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                },
                recent: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.recent&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.recent' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                },
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.get&apikey=' + apikey + (options.showdate ? '&showdate=' + options.showdate : '') + (options.showid ? '&showid=' + options.showid : '') + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                },
                tiph: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.tiph&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.tiph' + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                }
            },
            links: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.links.get&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.links.get&apikey=' + apikey + '&showid=' + options.showid + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                }
            },
            upcoming: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.upcoming&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                var opt = 'method=pnet.shows.upcoming&apikey=' + apikey + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            },
            query: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.query&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                // Query options: http://api.phish.net/docu/#p=pnet.shows.query
                
                // Optional params
                var vyear = options.year ? '&year=' + options.year : "";
                var vvenueid = options.venueid ? '&venueid=' + options.venueid : "";
                var vstate = options.state ? '&state=' + options.state : "";
                var vcountry = options.country ? '&country=' + options.country : "";
                var vmonth = options.month ? '&month=' + options.month : "";
                var vday = options.day ? '&day=' + options.day : "";
                var vartist = options.artist ? '&artist=' + options.artist : "";
                var vshowids = options.showids ? '&showids=' + options.showids : "";
                
                var opt = 'method=pnet.shows.query&apikey=' + apikey + vyear + vvenueid + vstate + vcountry + vmonth + vday + vartist + vshowids + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            }
        },
        collections: {
            get: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&collectionid=1294152220
                var opt = 'method=pnet.collections.get&apikey=' + apikey + '&collectionid='+ options.collectionid + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            },
            query: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.query&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&uid=USERID
                var opt = 'method=pnet.collections.query&apikey=' + apikey + 'uid=' + options.userid + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                Request(opt, cb);
            }
        },
        user: {
            username: {
                check: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.username.check&apikey=YOUR-API-KEY&username=REQ-USERNAME
                    var opt = 'method=pnet.user.username.check&apikey=' + apikey + '&username=' + options.username;
                    Request(opt, cb);
                }
            },
            register: function(options, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.register&apikey=YOUR-API-KEY&username=REQ-USERNAME&passwd=REQ-PASSWORD&realname=John+Q+Phishead
                var opt = 'method=pnet.user.register&apikey=' + apikey + '&username=' + options.username + '&passwd=' + options.pwd + '&realname=' + options.realname;
                Request(opt, cb);
            },
            get: function(options, cb){
                // Dead? http://api.phish.net/docu/#p=pnet.user.get
                // Request(opt, cb);
                cb("Error: Not Implemented", null);
            },
            uid: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.uid.get&apikey=YOUR-API-KEY&username=USERNAME
                    var opt = 'method=pnet.user.uid.get&apikey=' + apikey + '&username=' + options.username;
                    Request(opt, cb);
                }
            },
            myshows: {
                get: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    var opt = 'method=pnet.user.myshows.get&apikey=' + apikey + '&username=' + options.username + (options.usernames ? '&usernames=' + options.usernames : '') + (options.pnetcb ? '&callback=' + options.pnetcb : '');
                    Request(opt, cb);
                },
                add: function(options, cb){
                    // showdate YYYY-mm-dd
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.add&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22
                    var opt = 'method=pnet.user.myshows.add&apikey=' + apikey + '&username=' + options.username + '&authkey=' + options.authkey + '&showdate=' + options.showdate;
                    Request(opt, cb);
                },
                remove: function(options, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.remove&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&transid=TRANSID
                    var opt = 'method=pnet.user.myshows.remove&apikey=' + apikey + '&username=' + options.username + '&authkey=' + options.authkey + '&showdate=' + options.showdate + '&transid=' + options.transid;
                    Request(opt, cb);
                }
            },
            rate: function(options, cb){
                // showdate YYYY-mm-dd
                // rating int 1-5
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.shows.rate&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&rating=5
                var opt = 'method=pnet.user.shows.rate&apikey=' + apikey + '&username=' + options.username + '&authkey=' + options.authkey + '&showdate=' + options.showdate + '&rating=' + options.rating;
                Request(opt, cb);
            }
        },
        jamcharts: {
            all: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.jamcharts.all&apikey=YOUR-API-KEY
                var opt = 'method=pnet.jamcharts.all&apikey=' + apikey;
                Request(opt, cb);
            }
        },
        artists: {
            get: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.artists.get&format=json
                var opt = 'method=pnet.artists.get';
                Request(opt, cb);
            }
        }
    }
}

// HTTPS Module
function Request(pnet_opts, cb){
    var results = "";
    
    var https_options = {
        hostname: 'api.phish.net',
        path: '/api.json?api=2.0&' + pnet_opts,
        method: 'POST'
    }
    var req = https.request(https_options, (res) => {
        res.on('data', (data) => {
            results += data;
        });
        
        res.on('end', function() {
            var obj = JSON.parse(results);
            cb(null, obj);
        });
        
        req.on('error', (e) => {
            cb(e);  
        });
    });
    
    req.end();
}
