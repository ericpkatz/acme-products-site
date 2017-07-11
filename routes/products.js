var app = require('express').Router();
var db = require('../db');
module.exports = app;

app.post('/', function(req, res, next){
  db.createProduct(req.body);
  res.redirect('/products');
});

app.get('/', function(req, res, next){
  res.render('products', { products: db.getProducts()});
});

app.delete('/:id', function(req, res, next){
  db.deleteProduct(req.params.id*1);
  res.redirect('/products');
});

app.get('/:id', function(req, res, next){
  res.render('product', { product: db.getProduct(req.params.id*1)});
});
