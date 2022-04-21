const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({  //method given by sequalize when we created a relation in app.js
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    userId: req.user.id
  })
  // Product.create({
  //   title: title,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  //   userId: req.user.id
  // })
  .then(result => {
    // console.log(res)
    console.log('Product Created');
  res.redirect('/admin/products');
  })
  .catch(err => {
    console.log(err)
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId = req.params.productId;
  req.user.getProducts({where: {id:prodId}})
  // Product.findByPk(prodId)
  .then( products=>{
    const product = products[0];
    if(!product){
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product:product
    });
  })
  .catch(err => {
    console.log(err)
  })
};

exports.postEditProduct = (req,res,next) =>{
  const prodId = req.body.productId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = title,
    product.imageUrl = imageUrl,
    product.price = price,
    product.description = description;
    return product.save();
  })
  .then( result => {
    console.log("Product Updated");
    res.redirect('/admin/products');
  })
  .catch(err =>{
    console.log(err)
  });
}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(product=>{
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>{
    console.log(err)
  })
};

exports.postDeleteProduct = (req,res,next) =>{
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product=>{
    return product.destroy();
  })
  .then(result => {
    console.log("Product Destroyed");
    res.redirect('/admin/products');
  })
  .catch(err=>{
    console.log(err)
  })
}
