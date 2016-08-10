var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-Parser');
app.use(bodyParser.urlencoded( {extended: true}));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000, function() {
	console.log('listening on 8000')
});
 
