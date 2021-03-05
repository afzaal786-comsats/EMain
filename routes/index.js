
const userController = require('../controller/User');
const categoryController = require('../controller/Catagerios');

// validate of token 
const { tokenValidation } = require("../auth/validateToken");
module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Ecomm APIS for Test"
        });
    });


    app.post('/api/user/login', userController.loginUser);                      // login Method
    app.post('/api/user/register', userController.createUser);                  // register User
    app.get('/api/user/findUserByEmail/:email', tokenValidation,userController.findUserByEmail);          //findUserByEmail


    app.post('/api/catagory/create' , tokenValidation,categoryController.createCategory)                   // create Categ
    app.get('/api/catagory/findAll' , tokenValidation,categoryController.findAllCategories)                   // find all Categ
    app.get('/api/catagory/findCatagoryById/:id', tokenValidation,categoryController.findCategoryById);          //findUserByEmail
    app.put('/api/catagory/updateCatagory', tokenValidation,categoryController.updateCategory);          // update Categ
}