/**
 * Phish.net Hierarchy preserving JS wrapper
 * 
 */
const https = require('https');

module.exports = PNetPlus;  

function PNetPlus () {
    this.pnet = {
        blog: {
            get: function(cb){
                // Public
                var opts = 'method=pnet.blog.get'
                MakeHttpsRequest(opts, function(err, data) {
                    if(err){
                        return err;
                    }
                    return data;
                });
            },
            item: {
                get: function(id, cb){
                    // Public
                    // https://api.phish.net/api.js?api=2.0&method=pnet.blog.item.get&format=json&id=12345
                    return {};
                }
            }
        },
        forum: {
            get: function(cb){
                // Requires API Key
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                return {};
            },
            thread: {
                get: function(cb){
                    // Requires API key
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.get&apikey=YOURAPIKEY&format=json
                    return {};
                },
                new: function(username, title, txt, authKey, cb){
                    // Requires API key
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.new&apikey=YOURAPIKEY&username=USERNAME&title=YOURTITLE&txt=YOUR+TEXT&authkey=AUTHKEY
                    return {};
                },
                respond: function(cb){
                    // Requires API Key
                    // https://api.phish.net/api.js?api=2.0&method=pnet.forum.thread.respond&apikey=YOURAPIKEY&username=USERNAME&thread=12345678901&txt=YOUR+TEXT&authkey=AUTHKEY
                    return {};
                }
            },
            canpost: function(username, cb){
                // Requires API Key
                // https://api.phish.net/api.js?api=2.0&method=pnet.forum.canpost&apikey=YOURAPIKEY&username=USERNAME
                return {};
            }
        },
        news: {
            get: function(cb){
                // Public
                // custom callbacks
                // https://api.phish.net/api.js?api=2.0&method=pnet.news.get&format=json&callback=YourCallbackFunction
                return {};
            },
            comments: {
                get: function(cb){
                    // Public
                    // custom callbacks
                    // https://api.phish.net/api.js?api=2.0&method=pnet.news.comments.get&format=json&callback=YourCallbackFunction
                    return {};
                }   
            }
        },
        reviews: {
            recent: function(cb){
                // Public
                // custom callbacks
                // https://api.phish.net/api.js?api=2.0&method=pnet.reviews.recent&format=json&callback=YourCallbackFunction
                return {};
            },
            query: function(username, showdate, cb){
                // Requires  API  Key
                // custom callbacks
                return {};
            }
        },
        shows: {
            setlists: {
                latest: function(linked, cb){
                    // Public
                    // custom callbacks
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.latest&format=json&callback=YourCallbackFunction
                    return {};
                },
                random: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.random&format=json&callback=YourCallbackFunction
                    return {};
                },
                recent: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.recent&format=json&callback=YourCallbackFunction
                    return {};
                },
                get: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    return {};
                },
                tiph: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.setlists.tiph&format=json&callback=YourCallbackFunction
                    return {};
                }
            },
            links: {
                get: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.shows.links.get&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                    return {};
                }
            },
            upcoming: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.upcoming&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                return {};
            },
            query: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.shows.query&format=json&apikey=YOUR-API-KEY&&year=2016&callback=YourCallbackFunction
                // Must read: http://api.phish.net/docu/#p=pnet.shows.query
                return {};
            }
        },
        collections: {
            get: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&collectionid=1294152220
                return {};
            },
            query: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.collections.query&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction&uid=USERID
                return {};
            }
        },
        user: {
            username: {
                check: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.username.check&apikey=YOUR-API-KEY&username=REQ-USERNAME
                    return {};
                }
            },
            register: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.register&apikey=YOUR-API-KEY&username=REQ-USERNAME&passwd=REQ-PASSWORD&realname=John+Q+Phishead
                return {};
            },
            get: function(cb){
                // Dead? http://api.phish.net/docu/#p=pnet.user.get
                return {};
            },
            uid: {
                get: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.uid.get&apikey=YOUR-API-KEY&username=USERNAME
                    return {};
                }
            },
            myshows: {
                get: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.get&format=json&apikey=YOUR-API-KEY&callback=YourCallbackFunction
                    return {};
                },
                add: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.add&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22
                    return {};
                },
                remove: function(cb){
                    // https://api.phish.net/api.js?api=2.0&method=pnet.user.myshows.remove&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&transid=TRANSID
                    return {};
                }
            },
            rate: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.user.shows.rate&apikey=YOURAPIKEY&username=USERNAME&authkey=AUTHKEY&showdate=1997-11-22&rating=5
                return {};
            }
        },
        jamcharts: {
            all: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.jamcharts.all&apikey=YOUR-API-KEY
                return {};
            }
        },
        artists: {
            get: function(cb){
                // https://api.phish.net/api.js?api=2.0&method=pnet.artists.get&format=json
                return {};
            }
        }
    }
}

function MakeHttpsRequest(pnet_opts, cb){
    
    var https_options = {
        hostname: 'api.phish.net',
        port: 80,
        path: '/api.js?api=2.0&' + pnet_opts,
        method: 'POST'
    }
    
    var req = https.request(https_options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
            cb(null, d);
        });
    });
    
    req.on('error', (e) => {
        cb(e);  
    });
    
    req.end();
}

PNetPlus.prototype.Authorize = function(apiKey, username, pwd) {
    // https://api.phish.net/api.js?api=2.0&method=pnet.api.authorize&apikey=YOURAPIKEY&username=USERNAME&passwd=USERPASSWORD
    var user = "";
    return {};
}

PNetPlus.prototype.Options = function(method, apiKey){
    return {
        hostname: 'api.phish.net',
        path: '/api.js?api=2.0&method=pnet.',
        method: method ? method:"POST",
        apiKey: apiKey
    }
}
