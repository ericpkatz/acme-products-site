var products = [
  { id: 1, name: 'Foo', rating: 5 },
  { id: 2, name: 'Bar', rating: 2 },
  { id: 3, name: 'Bazz', rating: 8 }
];

module.exports = {
  getProducts: function(){
    return products;
  },
  getProduct: function(id){
    return products.filter(function(product){
      return product.id === id;
    })[0];
  },
  getTopSeller: function(){
    return products.reduce(function(topSeller, product){
      if(!topSeller){
        topSeller = product;
      }
      else{
        if(product.rating > topSeller.rating){
          topSeller = product;
        }
      }
      return topSeller;
    }, null);
  },
  createProduct: function(product){
    if(!product.name){
      throw 'product must have a name';
    }
    var maxId = products.reduce(function(max, product){
      if(product.id > max){
        max = product.id;
      }
      return max;
    }, 0);
    product.id = ++maxId;
    products.push(product);
  },
  deleteProduct: function(id){
    products.filter(function(product){
      return product.id !== id;
    });
  },
};
