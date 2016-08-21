/**
 * Phish.net JS API Wrapper
 * 
 */
function PNetPlus () {
    this.root = 'https://api.phish.net/api.js?api=2.0&method=pnet.';
    
    // TODO: Phish.net defined namespaces
    /**
    this.api = 'api';
    this.blog = 'blog';
    this.forum = 'forum';
    this.news = 'news';
    this.reviews = 'reviews';
    this.shows = 'shows';
    this.collections = 'collections';
    this.user = 'user';
    this.jamcharts = 'jamcharts';
    */
    
    // Create parameters
    this.options = function(namespace, user, pwd, handler) {
        return {
            namespace: namespace,
            path: this.root +namespace,
            username: user ? "":user,
            password:  pwd ? "":pwd,
            _auth: pwd ? true:false
        };
    };
    
}

function UserCallback(callback) {
}

/**
 * Public methods
 */
PNetPlus.prototype.GetLatestSet = function() {
    return 0;
}

PNetPlus.prototype.GetSet = function(date) {
    return 0;
};

PNetPlus.prototype.BlogGet = function(method, format) {
    return 0;
};

PNetPlus.prototype.BlogItemGet = function(method, id, format) {
    return 0;
};

PNetPlus.prototype.ForumGet =  function(apikey, method, format) {
    return 0;
};

PNetPlus.prototype.NewsGet =  function (format, method, callback) {
    return 0;
};

PNetPlus.prototype.NewsCommentsGet = function (format, method, callback) {
    return 0;
};

PNetPlus.prototype.Reviewsrecent = function (format, method, callback) {
    return 0;
};

PNetPlus.prototype.ShowsSetlistsLatest = function (format, method, linked, callback) {
    return 0;
};

PNetPlus.prototype.ShowsSetlistsRandom = function (format, method, callback) {
    return 0;
};

PNetPlus.prototype.ShowsSetlistsRecent = function (format, method, callback) {
    return 0;
};

PNetPlus.prototype.ShowsUpcoming = function (format, method, apikey, callback) {
    return 0;
};

PNetPlus.prototype.JamchartsAll = function (method, apikey) {
    return 0;
};

/**
 * Protected methods
 */
PNetPlus.prototype._Authorize = function (user, pwd) {
    // pnet.api.authorize
    return 0;
}

PNetPlus.prototype._AuthorizedCheck = function (appkey, user) {
    // pnet.api.authorized.check
    return 0;
}

PNetPlus.prototype._GetAuthKey = function (appkey, method, user) {
    // pnet.api.authkey.get
    return 0;
}

PNetPlus.prototype._ThreadGet = function(appkey, method, threadId, format) {
    // pnet.forum.thread.get
    return 0;
}

 PNetPlus.prototype._Canpost = function (appkey, method, user) {
     // pnet.forum.canpost
     return 0;
}

PNetPlus.prototype._ThreadNew = function (appkey, method, user, title, txt, authkey) {
    // pnet.forum.thread.new
    return 0;
}

PNetPlus.prototype._ThreadRespond = function (apikey, method, user, thread, txt, authkey) {
    return 0;
}

PNetPlus.prototype._ReviewsQuery = function (format, method, apikey, callback, user, showdate) {
    return 0;
}

PNetPlus.prototype._SetlistsGet = function (format, method, apikey, callback, showdate, showid) {
    return 0;
}

PNetPlus.prototype._LinksGet = function (format, method, apikey, callback, showid) {
    return 0;
}

PNetPlus.prototype._ShowsQuery = function (format, method, apikey, callback) {
    return 0;
}

PNetPlus.prototype._CollectionsGet = function (format, method, apikey, collectionId, callback) {
    return 0;
}

PNetPlus.prototype._CollectionsQuery = function (format, method, apikey, uid, callback) {
    return 0;
}

PNetPlus.prototype._UsernameCheck = function (method, apikey, user) {
    return 0;
}

PNetPlus.prototype._Register = function (method, apikey, user, pwd, email, realname) {
    return 0;
}

PNetPlus.prototype._UserUidGet = function (method, apikey, user) {
    return 0;
}

PNetPlus.prototype._UserMyshowsGet = function (format, method, apikey, user, usernames, callback) {
    return 0;
}

PNetPlus.prototype._UserMyshowsAdd = function (apikey, method, user, showdate, authkey) {
    return 0;
}

PNetPlus.prototype._UserMyshowsRemove = function (apikey, method, username, showdate, transId, authkey) {
    return 0;
}

PNetPlus.prototype._UserShowsRate = function (apikey, method, user, showdate, rating, authkey) {
    return 0;
}

module.exports = PNetPlus;