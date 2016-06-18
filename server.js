
var express           = require('express');
var app               = express(app);
var bodyParser        = require('body-parser');
var port              = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip                = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var path              = require('path');
var exphbs            = require('express-handlebars');
var router            =  express.Router();

//CONFIG------------------------------------------------------
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use( "/public", express.static(path.join(__dirname + '/public')));

//ROUTES-------------------------------------------------------
require('./app/routes')(router);
app.use('/', router);

app.listen(port, ip);
console.log('App is listennig on port ' + port + ' ' + ip);
