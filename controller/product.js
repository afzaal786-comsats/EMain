// Product Controller CRUD
const Product = require('../models').Products;
const Categories = require('../models').Categories;
const Suppliers = require('../models').Suppliers;

module.exports = {
  // create New Product

  async createProduct(req, res) {
    try {
      const supplierCollection = await Suppliers.findOne({
        where:{
          id : req.body.SupplierID
        }
      })
      console.log("Supplier Colleciton ", supplierCollection);
      if(supplierCollection){
        const categoryCollection = await Categories.findOne({
          where: {
            id: req.body.categoryID,
          },
        })
        if (categoryCollection) {
          const productCollection = await Product.create({
            productName: req.body.productName,
            unit: req.body.unit,
            price: req.body.price,
            categoryID: req.body.categoryID,
            SupplierID: req.body.SupplierID,
            userID: req.body.userID,
          })
          res.status(200).send(productCollection)
        } else {
          res.status(200).send('Category Not Found')
        }
      }else{
        res.status(200).send("No Supplier Found")
      }
     
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },


  // find All products
  async findAllProducts(req,res){
    try {
      const productCollection = await Product.findAll({});
      res.status(200).send(productCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
}
