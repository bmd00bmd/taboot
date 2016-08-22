/**
 * Phish.net Namespace Preserving JS Wrapper
 * Author: Brent Dowdy
 * "http://api.phish.net/docu"
 */
const https = require('https');

module.exports = PNetPlus;  

function PNetPlus () {
    this.pnet = {
        api: {
          authorize: function(apikey, username, pwd, cb) {
            // https://api.phish.net/api.js?api=2.0&method=pnet.api.authorize&apikey=YOURAPIKEY&username=USERNAME&passwd=USERPASSWORD
            var opt = 'method=pnet.api.authorize&apikey=' + apikey + '&username=' + username + '&passwd=' + pwd;
            Request(opt, cb);
          },
          authorized: {
              check: function(apikey, username, cb) {
                  // https://api.phish.net/api.js?api=2.0&method=pnet.api.authorized.check&apikey=YOURAPIKEY&username=USERNAME
                  var opt = 'method=pnet.api.authorized.check&apikey=' + apikey + '&username=' + username;
                  Request(opt, cb);
              }
          },
          authkey: {
              get: function(apikey, username, cb) {
                 // https://api.phish.net/api.js?api=2.0&method=pnet.api.authkey.get&apikey=YOURAPIKEY&username=USERNAME
                 var opt = 'method=pnet.api.authkey.get&apikey=' + apikey + '&username=' + username;
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
                get: function(id, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.blog.item.get&format=json&id=12345
                    var opts = 'method=pnet.blog.item.get&id=' + id;
                    Request(opts, cb);
                }
            }
        },
        forum: {
            get: function(apikey, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                var opt = 'method=pnet.forum.get&apikey=' + apikey;
                Request(opt, cb);
            },
            thread: {
                get: function(apikey, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                    var opt = 'method=pnet.forum.get&apikey=' + apikey;
                    Request(opt, cb);
                },
                new: function(apikey, username, title, body, authkey, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.new&apikey=YOURAPIKEY&username=USERNAME&title=YOURTITLE&txt=YOUR+TEXT&authkey=AUTHKEY
                    var opt = 'method=pnet.forum.thread.new&apikey=' + apikey + '&username=' + username + '&title=' + title + '&txt=' + body + '&authkey=' + authkey;
                    Request(opt, cb);
                },
                respond: function(apikey, username, threadId, body, authkey, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.respond&apikey=YOURAPIKEY&username=USERNAME&thread=12345678901&txt=YOUR+TEXT&authkey=AUTHKEY
                    var opt = 'method=pnet.forum.thread.respond&apikey=' + apikey + '&username=' + username + '&thread=' + threadId + '&txt=' + body + '&authkey=' + authkey;
                    Request(opt, cb);
                }
            },
            canpost: function(apikey, username, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.canpost&apikey=YOURAPIKEY&username=USERNAME
                var opt = 'method=pnet.forum.canpost&apikey=' + apikey + '&username=' + username;
                Request(opt, cb);
            }
        },
        news: {
            get: function(cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.news.get&format=json&callback=YourCallbackFunction
                var opt = 'method=pnet.news.get' + pnetcb ? '&callback=' + pnetcb : '';
                Request(opt, cb);
            },
            comments: {
                get: function(cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.news.comments.get&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.news.comments.get' + pnetcb ? '&callback=' + pnetcb : '';
                    Request(opt, cb);
                }   
            }
        },
        reviews: {
            recent: function(cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.reviews.recent&format=json&callback=YourCallbackFunction
                var opt = 'method=pnet.reviews.recent' + pnetcb ? '&callback=' + pnetcb : '';
                Request(opt, cb);
            },
            query: function(apikey, username, showdate, cb, pnetcb){
                // showdate (YYYY-mm-dd)
                // https://api.phish.net/api.js?api=2.0&method=pnet.reviews.query&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                var opt = 'method=pnet.reviews.query&apikey='+ apikey + (username ? '&username=' + username : '') + (showdate ? '&showdate=' + showdate : '') + (pnetcb ? '&callback=' + pnetcb : '');
                Request(opt, cb);
            }
        },
        shows: {
            setlists: {
                latest: function(linked, cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.latest&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.latest' + (linked ? '&linked=' + linked : '') + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                },
                random: function(cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.random&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.random' + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                },
                recent: function(cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.recent&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.recent' + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                },
                get: function(apikey, cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.get&apikey=' + apikey + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                },
                tiph: function(cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.tiph&format=json&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.setlists.tiph' + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                }
            },
            links: {
                get: function(apikey, showId, cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.links.get&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                    var opt = 'method=pnet.shows.links.get&format=json&apikey=YOUR-API-KEY&&showid=' + showId + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                }
            },
            upcoming: function(apikey, cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.upcoming&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                var opt = 'method=pnet.shows.upcoming&apikey=' + apikey + (pnetcb ? '&callback=' + pnetcb : '');
                Request(opt, cb);
            },
            query: function(apikey, year, venueid, state, country, month, day, artist, showids, cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.query&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                // Query options: http://api.phish.net/docu/#p=pnet.shows.query
                
                // Optional params
                var vyear = year ? '&year=' + year : "";
                var vvenueid = venueid ? '&venueid=' + venueid : "";
                var vstate = state ? '&state=' + state : "";
                var vcountry = country ? '&country=' + country : "";
                var vmonth = month ? '&month=' + month : "";
                var vday = day ? '&day=' + day : "";
                var vartist = artist ? '&artist=' + artist : "";
                var vshowids = showids ? '&showids=' + showids : "";
                
                var opt = 'method=pnet.shows.query&apikey=' + apikey + vyear + vvenueid + vstate + vcountry + vmonth + vday + vartist + vshowids + (pnetcb ? '&callback=' + pnetcb : '');
                Request(opt, cb);
            }
        },
        collections: {
            get: function(apikey, collectionid, cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&collectionid=1294152220
                var opt = 'method=pnet.collections.get&apikey=' + apikey + '&collectionid='+ collectionid + (pnetcb ? '&callback=' + pnetcb : '');
                Request(opt, cb);
            },
            query: function(apikey, userid, cb, pnetcb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.query&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&uid=USERID
                var opt = 'method=pnet.collections.query&apikey=' + apikey + 'uid=' + userid + (pnetcb ? '&callback=' + pnetcb : '');
                Request(opt, cb);
            }
        },
        user: {
            username: {
                check: function(apikey, username, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.username.check&apikey=YOUR-API-KEY&username=REQ-USERNAME
                    var opt = 'method=pnet.user.username.check&apikey=' + apikey + '&username=' + username;
                    Request(opt, cb);
                }
            },
            register: function(apikey, username, pwd, realname, cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.register&apikey=YOUR-API-KEY&username=REQ-USERNAME&passwd=REQ-PASSWORD&realname=John+Q+Phishead
                var opt = 'method=pnet.user.register&apikey=' + apikey + '&username=' + username + '&passwd=' + pwd + '&realname=' + realname;
                Request(opt, cb);
            },
            get: function(cb){
                // Dead? http://api.phish.net/docu/#p=pnet.user.get
                // Request(opt, cb);
                cb("Error: Not Implemented", null);
            },
            uid: {
                get: function(apikey, username, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.uid.get&apikey=YOUR-API-KEY&username=USERNAME
                    var opt = 'method=pnet.user.uid.get&apikey=' + apikey + '&username=' + username;
                    Request(opt, cb);
                }
            },
            myshows: {
                get: function(apikey, cb, pnetcb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    var opt = 'method=pnet.user.myshows.get&apikey=' + apikey + (pnetcb ? '&callback=' + pnetcb : '');
                    Request(opt, cb);
                },
                add: function(apikey, username, authkey, showdate, cb){
                    // showdate YYYY-mm-dd
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.add&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22
                    var opt = 'method=pnet.user.myshows.add&apikey=' + apikey + '&username=' + username + '&authkey=' + authkey + '&showdate=' + showdate;
                    Request(opt, cb);
                },
                remove: function(apikey, username, authkey, showdate, transid, cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.remove&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&transid=TRANSID
                    var opt = 'method=pnet.user.myshows.remove&apikey=' + apikey + '&username=' + username + '&authkey=' + authkey + '&showdate=' + showdate + '&transid=' + transid;
                    Request(opt, cb);
                }
            },
            rate: function(apikey, username, authkey, showdate, rating, cb){
                // showdate YYYY-mm-dd
                // rating int 1-5
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.shows.rate&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&rating=5
                var opt = 'method=pnet.user.shows.rate&apikey=' + apikey + '&username=' + username + '&authkey=' + authkey + '&showdate=' + showdate + '&rating=' + rating;
                Request(opt, cb);
            }
        },
        jamcharts: {
            all: function(apikey, cb){
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
    var https_options = {
        hostname: 'api.phish.net',
        path: '/api.json?api=2.0&' + pnet_opts,
        method: 'POST'
    }
    var req = https.request(https_options, (res) => {
        res.on('data', (d) => {
            cb(null, d);
        });
    });
    req.on('error', (e) => {
        cb(e);  
    });
    req.end();
}
