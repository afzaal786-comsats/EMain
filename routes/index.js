const customerController = require('../controller/customers');
const categoryController = require('../controller/category');
const productController = require('../controller/product');
const supplierController = require('../controller/supplier');
const userContoller = require('../controller/user');
const employeeContoller = require('../controller/employee');

module.exports=(app)=>{
    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    });


    app.post('/api/customer/create',customerController.createCustomer);             // Create new customer
    app.get('/api/customer/findAll', customerController.findAllCustomers)           // find All Customers 

    app.post('/api/employee/create',employeeContoller.createEmployee);             // Create new Employee
    app.get('/api/employee/findAll',employeeContoller.findAllEmployee);             // Create new Employee

    app.post('/api/category/create',categoryController.createCategory)              // Create Category
    app.get('/api/category/findAll',categoryController.findAllCategories)              // Get All Categories


    app.post('/api/product/create',productController.createProduct)              // Create Product
    app.get('/api/product/findAll',productController.findAllProducts)              // Create Product

    app.post('/api/suppliers/create',supplierController.createSuppliers)              // Create Supplier
    app.get('/api/suppliers/findAll',supplierController.findAllSuppliers)              // Get All Supplier

    app.post('/api/user/create',userContoller.createUser)                                             // user creation
    app.post('/api/user/login',userContoller.loginUser)                                             // user creation
}