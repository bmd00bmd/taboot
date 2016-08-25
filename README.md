# taboot

**Phish.net Node.js API Wrapper**

A stateless Node.js npm module for accessing the Phish.net API. Uses HTTPS POST only, targeting API v2.0 and JSON format

Available through npm: https://www.npmjs.com/package/taboot


### Use
```
var Taboot = require('taboot');
var pnet = new Taboot(apikey).pnet
```

---
### Notes 


 * Retains the http://api.phish.net/docu namespace 
 * While the response is parsed into a JSON object, there is no additional API argument validation, garbage in garbage out
 * Optional custom callbacks to the api are supported where allowed
    - An optional Phish.net Callback ('pnetcb' in Taboot) can be passed as a query argument to wrap the raw json response data before coming back from Phish.net servers
    - http://api.phish.net/callbacks/
 * Method signatures take an 'options' param followed by your node callback ('cb')

---

### Example
```
// pass your apikey as a param to the Taboot constructor, 'pnet' mirrors the api documentation
var Taboot = require('taboot');
var pnet = new Taboot(process.env['PNET_APIKEY']).pnet;

function authorize(username, pwd){
    // Create an options object with the api parameters, order is not specific - 
    var options = {
        username: 'PhirstPhishPhan2020',
        pwd: 'phirst_phish_phan_secret'    
    }
    pnet.api.authorize(options, function(err, data) {
        if(err){
            console.log("Error " + err)
            return;
        }
        console.log((data)['authkey']);
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
