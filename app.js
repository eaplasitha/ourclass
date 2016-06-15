/*!
 * Node.js example project
 * 
 */
/* jshint node: true */

// Load express
var express = require('express');


// Configure express
var app = express();
app.configure(function() {
    app.use(app.router);
});


// Add basic route
app.get('/hello/:who?', function(req, res) {
    res.end('Hello '+(req.params.who || 'world')+'.');
});


// Everything's ready. Listen.
app.listen(8080);
console.log('Server running at port 8080.');
