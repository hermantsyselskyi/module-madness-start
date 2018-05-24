// Require express - gives us back a function
const express = require('express');
const wholeThing = require('../currency');
// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

app.get('/currency', function(req, res){
  // YOUR CODE HERE
  res.send(  wholeThing () );
});

// Start up the server
app.listen(port, function() {
    console.log('listening on port', port);
});


