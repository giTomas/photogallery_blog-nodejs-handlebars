
const express           = require('express');
const app               = express(app);
const bodyParser        = require('body-parser');
const port              = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001;
const ip                = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const path              = require('path');
const exphbs            = require('express-handlebars');
const router            = express.Router();

//CONFIG------------------------------------------------------
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use( "/public", express.static(path.join(__dirname + '/public')));

//ROUTES-------------------------------------------------------
require('./app/routes')(router);
app.use('/', router);

app.listen(port, ip);
console.log('App is listennig on port ' + port + ' ' + ip);
