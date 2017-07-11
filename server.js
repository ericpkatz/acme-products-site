var express = require('express');
var path = require('path');
var swig = require('swig');
var db = require('./db');
swig.setDefaults({ cache: false });


var app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded( { extended: false} ));
app.use(require('method-override')('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.get('/', function(req, res, next){
  res.render('index', { topSeller: db.getTopSeller() });
});

app.use('/products', require('./routes/products'));

app.use(function(err, req, res, next){
  res.render('error', { error: err });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
