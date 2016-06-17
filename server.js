
const express        = require('express');
const app            = express(app);
const bodyParser     = require('body-parser');
const port           = process.env.PORT || 8080;
const path           = require('path');
const exphbs         = require('express-handlebars');
//const contentEngine  = require('./app/contentEngine');
const router = express.Router();

//config------------------------------------------------------

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use( "/public", express.static(path.join(__dirname + '/public')));

//ROUTES-------------------------------------------------------

require('./app/routes')(router);

app.use('/', router);

app.listen(port);
console.log('App is listennig on port 8080');
