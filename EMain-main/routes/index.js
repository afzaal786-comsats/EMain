const customerController = require('../controller/customers');
const categoryController = require('../controller/category');
const productController = require('../controller/product');
const supplierController = require('../controller/supplier');

module.exports=(app)=>{
    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    });


    app.post('/api/customer/create',customerController.createCustomer);             // Create new customer
    app.get('/api/customer/findAll', customerController.findAllCustomers)           // find All Customers 


    app.post('/api/category/create',categoryController.createCategory)              // Create Category
    app.get('/api/category/findAll',categoryController.findAllCategories)              // Get All Categories


    app.post('/api/product/create',productController.createProduct)              // Create Product


    app.post('/api/suppliers/create',supplierController.createSuppliers)              // Create Supplier
    app.get('/api/suppliers/findAll',supplierController.findAllSuppliers)              // Get All Supplier


}