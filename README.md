# taboot

**Phish.net Node.js API Wrapper**

A stateless Node.js npm module for accessing the Phish.net API. Uses HTTPS POST only, targeting API v2.0 and JSON format

`var pnet = new PNetPlus().pnet`

 * Retains the "http://api.phish.net/docu" namespace 
 * There is no additional API argument validation, garbage in garbage out
 * Optional custom callbacks to the api are supported where allowed
    - A Phish.net Callback ('pnetcb') will be passed as a query argument to the api
    - http://api.phish.net/callbacks/
 * Method signatures begin with 'apikey' where required and end with your node callback and api callback respectively
    - Additional parameters fall between 'apikey' and 'cb' in method signatures

---

### Example
```
function authorize(apikey, username, pwd){
    var pnet = new PNetPlus().pnet;
    pnet.api.authorize(apikey, username, pwd, function(err, data) {
        if(err){
            console.log("Error " + err)
            return;
        }
        console.log(JSON.parse(data)['authkey']);
    });  
}
```

---
### Testing 
Mocha, Chai and Chai-Http
```
"scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec"
}

npm test
```